

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://dev.ndhm.gov.in/gateway",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def get_v0_5_certs(self) -> operations.GetV05CertsResponse:
        r"""Get certs for JWT verification
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v0.5/certs"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV05CertsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Certs])
                res.certs = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def get_v0_5_heartbeat(self, request: operations.GetV05HeartbeatRequest) -> operations.GetV05HeartbeatResponse:
        r"""Get consent request status
        """
        
        base_url = operations.GET_V0_5_HEARTBEAT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v0.5/heartbeat"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV05HeartbeatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HeartbeatResponse])
                res.heartbeat_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_v0_5_well_known_openid_configuration(self) -> operations.GetV05WellKnownOpenidConfigurationResponse:
        r"""Get openid configuration
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v0.5/.well-known/openid-configuration"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV05WellKnownOpenidConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OpenIDConfiguration])
                res.open_id_configuration = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def post_v0_5_care_contexts_discover(self, request: operations.PostV05CareContextsDiscoverRequest) -> operations.PostV05CareContextsDiscoverResponse:
        r"""Discover patient's accounts
        Request for patient care context discover, made by Gateway intended for a specific HIP. It is expected that HIP will subsequently return either zero or one patient record with (potentially masked) associated care contexts
          1. **At least one of the verified identifier matches**
          2. **Name (fuzzy), gender matches**
          3. **If YoB was given, age band(+-2) matches**
          4. **If unverified identifiers were given, one of them matches**
          5. **If more than one patient records would be found after aforementioned steps, then patient who matches most verified and unverified identifiers would be returned.**
          6. **If there would be still more than one patients (after ranking) error would be returned**
          7. **Intended HIP should be able to resolve and identify results returned in the subsequent link confirmation request via the specified transactionId**
          8. **Intended HIP should store the discovery results with transactionId and care contexts discovered for subsequent link initiation**
        
        """
        
        base_url = operations.POST_V0_5_CARE_CONTEXTS_DISCOVER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v0.5/care-contexts/discover"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05CareContextsDiscoverResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_care_contexts_on_discover(self, request: operations.PostV05CareContextsOnDiscoverRequest) -> operations.PostV05CareContextsOnDiscoverResponse:
        r"""Response to patient's account discovery request
        Result of patient care-context discovery request at HIP end. If a matching patient found with zero or more care contexts associated, it is specified as result attribute. If the prior discovery request, resulted in errors then it is specified in the error attribute. Reasons of errors can be 
          1. **more than one definitive match for the given request** 
          2. **no verified identifer was specified**
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v0.5/care-contexts/on-discover"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05CareContextsOnDiscoverResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_consents_hip_notify(self, request: operations.PostV05ConsentsHipNotifyRequest) -> operations.PostV05ConsentsHipNotifyResponse:
        r"""Consent notification
        Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED and REVOKED status notifications will be sent to HIP.
          1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available. 
          2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked. 
        
        """
        
        base_url = operations.POST_V0_5_CONSENTS_HIP_NOTIFY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v0.5/consents/hip/notify"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05ConsentsHipNotifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_consents_hip_on_notify(self, request: operations.PostV05ConsentsHipOnNotifyRequest) -> operations.PostV05ConsentsHipOnNotifyResponse:
        r"""Consent notification
        This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v0.5/consents/hip/on-notify"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05ConsentsHipOnNotifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_health_information_hip_on_request(self, request: operations.PostV05HealthInformationHipOnRequestRequest) -> operations.PostV05HealthInformationHipOnRequestResponse:
        r"""Health information data request
        API called by HIP to acknowledge Health information request receipt. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.  
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v0.5/health-information/hip/on-request"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05HealthInformationHipOnRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_health_information_hip_request(self, request: operations.PostV05HealthInformationHipRequestRequest) -> operations.PostV05HealthInformationHipRequestResponse:
        r"""Health information data request
        API called by CM to request Health information from HIP against a validated consent artefact. The transactionId is the correlation id that HIP should use use when pushing data to the **dataPushUrl**. 
        
        """
        
        base_url = operations.POST_V0_5_HEALTH_INFORMATION_HIP_REQUEST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v0.5/health-information/hip/request"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05HealthInformationHipRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_health_information_notify(self, request: operations.PostV05HealthInformationNotifyRequest) -> operations.PostV05HealthInformationNotifyResponse:
        r"""Notifications corresponding to events during data flow
        API called by HIU and HIP during data-transfer. 
        1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]
        2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]
        3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent
        4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED] 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v0.5/health-information/notify"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05HealthInformationNotifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_health_information_transfer(self, request: operations.PostV05HealthInformationTransferRequest) -> operations.PostV05HealthInformationTransferResponse:
        r"""health information transfer API
        **NOTE**: This API is actually the callback URL that is passed as **dataPushUrl** in the data request API - /v0.5/health-information/hip/request. This API is directly called by HIP Data Bridge and is not mediated via CM, and hence not routed through the Gateway. 
          1. This API should be implemented at HIU side. It maybe implemented by the Data Bridge representing the HIU. 
          2. Entry elements maybe ***content*** or ***link***, although for version 1, entry ***content*** is preferred. 
          3. Entry ***content*** (or even link reference content) must be encrypted by means of Elliptic-curve Diffie–Hellman Key Exchange, utilizing the HIU keymaterials that are passed through the data request API - /v0.5/health-information/hip/request. 
          4. Media contains the mimetype of content, and for v1, it is \"application/fhir+json\"
          5. checksum is Md5 checksum of the data conent, before encryption
          6. Please refer to the NDHM Sandbox Documentation for the format of FHIR bundle that is passed through content 
        
        """
        
        base_url = operations.POST_V0_5_HEALTH_INFORMATION_TRANSFER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v0.5/health-information/transfer"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05HealthInformationTransferResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_links_link_add_contexts(self, request: operations.PostV05LinksLinkAddContextsRequest) -> operations.PostV05LinksLinkAddContextsResponse:
        r"""API for HIP initiated care-context linking for patient
        API to submit care-context to CM for HIP initiated linking. The API must accompany the \"accessToken\" fetched in the users/auth process.  
          1. subsequent usage for accessToken may be invalid if it was meant for one-time usage or if it expired
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v0.5/links/link/add-contexts"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05LinksLinkAddContextsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_links_link_confirm(self, request: operations.PostV05LinksLinkConfirmRequest) -> operations.PostV05LinksLinkConfirmResponse:
        r"""Token submission by Consent Manager for link confirmation
        API to submit the token that was sent by HIP during the link request. 
        
        """
        
        base_url = operations.POST_V0_5_LINKS_LINK_CONFIRM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v0.5/links/link/confirm"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05LinksLinkConfirmResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_links_link_init(self, request: operations.PostV05LinksLinkInitRequest) -> operations.PostV05LinksLinkInitResponse:
        r"""Link patient's care contexts
        Request from Gateway to links care contexts associated with only one patient
          1. **Validate account reference number and care context reference number**
          2. **Validate transactionId in the request with discovery request entry to check whether there was a discovery
              and were these care contexts discovered or not for a given patient**
          3. **Before eventual link confirmation, HIP needs to authenticate the request with the patient(eg: OTP verification)**
          4. **HIP should communicate the mode of authentication of a successful request to Consent Manager**
        
        """
        
        base_url = operations.POST_V0_5_LINKS_LINK_INIT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v0.5/links/link/init"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05LinksLinkInitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_links_link_on_add_contexts(self, request: operations.PostV05LinksLinkOnAddContextsRequest) -> operations.PostV05LinksLinkOnAddContextsResponse:
        r"""callback API for HIP initiated patient linking /link/add-context
        If the accessToken is valid for purpose of linking, and specified details provided, CM will send \"acknoweldgement.status\" as SUCCESS. If any error occcurred, for example invalid token, or other required patient or care-context information not provided, then \"error\" attribute conveys so. 
          1. **accessToken must be valid and must be for the purpose of linking**
        
        """
        
        base_url = operations.POST_V0_5_LINKS_LINK_ON_ADD_CONTEXTS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v0.5/links/link/on-add-contexts"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05LinksLinkOnAddContextsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_links_link_on_confirm(self, request: operations.PostV05LinksLinkOnConfirmRequest) -> operations.PostV05LinksLinkOnConfirmResponse:
        r"""Token authenticated by HIP, indicating completion of linkage of care-contexts
        Returns a list of linked care contexts with patient reference number.
          1. **Validated and linked account reference number**
          2. **Validated that the token sent from Consent Manager is same as the one generated by HIP**
          3. **Verified that same Consent Manager which made the link request is sending the token**
          4. **Results of unmasked linked care contexts with patient reference number**
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v0.5/links/link/on-confirm"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05LinksLinkOnConfirmResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_links_link_on_init(self, request: operations.PostV05LinksLinkOnInitRequest) -> operations.PostV05LinksLinkOnInitResponse:
        r"""Response to patient's care context link request
        Result of patient care-context link request from HIP end. This happens in context of previous discovery of patient found at HIP end, therefore the link requests ought to be in reference to the patient reference and care-context references previously returned by the HIP. The correlation of discovery and link request is maintained through the transactionId. HIP should have
          1. **Validated transactionId in the request to check whether there was a discovery done previously, and the link request corresponds to returned patient care care context references**
          2. **Before returning the response, HIP should have sent an authentication request to the patient(eg: OTP verification)**
          3. **HIP should communicate the mode of authentication of a successful request**
          4. **HIP subsequently should expect the token passed via /link/confirm against the link.referenceNumber passed in this call**
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
          
        The error section in the body, represents the potential errors that may have occurred. Possible reasons:
          1. **Patient reference number is invalid**
          2. **Care context reference numbers are invalid**
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v0.5/links/link/on-init"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05LinksLinkOnInitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_patients_profile_on_share(self, request: operations.PostV05PatientsProfileOnShareRequest) -> operations.PostV05PatientsProfileOnShareResponse:
        r"""Response to patient's share profile request
        Result of patient share profile request at HIP end.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v0.5/patients/profile/on-share"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05PatientsProfileOnShareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_patients_profile_share(self, request: operations.PostV05PatientsProfileShareRequest) -> operations.PostV05PatientsProfileShareResponse:
        r"""Share patient profile details
        Request for sharing patient's profile details to HIP
        
        """
        
        base_url = operations.POST_V0_5_PATIENTS_PROFILE_SHARE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v0.5/patients/profile/share"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05PatientsProfileShareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_patients_sms_notify(self, request: operations.PostV05PatientsSmsNotifyRequest) -> operations.PostV05PatientsSmsNotifyResponse:
        r"""API for HIP to send SMS notifications to patients
        API to send SMS notifications to patient with custom deeplink.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v0.5/patients/sms/notify"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05PatientsSmsNotifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_patients_sms_on_notify(self, request: operations.PostV05PatientsSmsOnNotifyRequest) -> operations.PostV05PatientsSmsOnNotifyResponse:
        r"""Acknowledgment response for SMS notification sent to patient by HIP
        If the SMS notification is successfully sent to patient then \"status\" will be \"ACKNOWLEDGED\" with no error.
        If the SMS notification is failed then \"status\" will be \"ERRORED\" with error.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v0.5/patients/sms/on-notify"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05PatientsSmsOnNotifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_sessions(self, request: operations.PostV05SessionsRequest) -> operations.PostV05SessionsResponse:
        r"""Get access token
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v0.5/sessions"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05SessionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SessionResponse])
                res.session_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def post_v0_5_users_auth_confirm(self, request: operations.PostV05UsersAuthConfirmRequest) -> operations.PostV05UsersAuthConfirmResponse:
        r"""Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
        This API is called by HIP/HIUs to confirm authentication of users. The transactionId returned by the previous callback API /users/auth/on-init must be sent. If Authentication is successful the callback API will send an \"access token\" for subsequent purpose specific API calls. Note only **credential.authCode** or **credential.demographic** should be sent
          1. demographic details are only required for  demographic auth as of now. 
          2. demographic details are required only in MEDIATED cases and if the **auth.mode** so demands. e.g. if **auth.mode** is DEMOGRAPHICS. Usually for demographic authentication, the name, gender and DOB must be exactly as specified in User Account.
          3. demographic.identifier is optional, however maybe required if authentication so mandates. 
          4. credential.authCode is required for other MEDIATED authentication like MOBILE_OTP, AADHAAR_OTP. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v0.5/users/auth/confirm"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05UsersAuthConfirmResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_users_auth_fetch_modes(self, request: operations.PostV05UsersAuthFetchModesRequest) -> operations.PostV05UsersAuthFetchModesResponse:
        r"""Get a patient's authentication modes relevant to specified purpose
        This API is meant for identify supported authentication modes for a patient given a specific purpose
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v0.5/users/auth/fetch-modes"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05UsersAuthFetchModesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_users_auth_init(self, request: operations.PostV05UsersAuthInitRequest) -> operations.PostV05UsersAuthInitResponse:
        r"""Initialize authentication from HIP
        This API is called by HIPs to initiate authentication of users. A transactionId is retuned by the corresponding callback API for confirmation of user auth.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v0.5/users/auth/init"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05UsersAuthInitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_users_auth_notify(self, request: operations.PostV05UsersAuthNotifyRequest) -> operations.PostV05UsersAuthNotifyResponse:
        r"""notification API in case of DIRECT mode of authentication by the CM
        This API is called by CM to confirm authentication of users. The transactionId returned is same as that passed in /auth/on-init. The \"auth.status\" conveys whether the request was GRANTED or DENIED.
        
          1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
          2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
          3. The payload is conditional to the purpose of auth. If purpose specified in /auth/init is KYC or KYC_AND_LINK, then patient details are passed. **auth.accessToken** is passed only if the purpose is LINK or KYC_AND_LINK.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v0.5/users/auth/notify"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05UsersAuthNotifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_users_auth_on_confirm(self, request: operations.PostV05UsersAuthOnConfirmRequest) -> operations.PostV05UsersAuthOnConfirmResponse:
        r"""callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
        This API is called by CM to confirm authentication of users.
        
          1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
          2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.     
        
        """
        
        base_url = operations.POST_V0_5_USERS_AUTH_ON_CONFIRM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v0.5/users/auth/on-confirm"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05UsersAuthOnConfirmResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_users_auth_on_fetch_modes(self, request: operations.PostV05UsersAuthOnFetchModesRequest) -> operations.PostV05UsersAuthOnFetchModesResponse:
        r"""Identification result for a consent-manager user-id
        If a patient is found then **auth** attribute contains the supported modes for the specified purpose. 
        Otherwise, error is raised for invalid requests or for non-existent id.
        Note in addition to the \"Authorization\" header, one of the following headers must be specified
        1. **X-HIU-ID** if the requester is HIU (identified from /auth/fetch-modes requester.id)
        2. **X-HIP-ID** if the requester is HIP (identified from /auth/fetch-modes requester.id)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v0.5/users/auth/on-fetch-modes"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05UsersAuthOnFetchModesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_users_auth_on_init(self, request: operations.PostV05UsersAuthOnInitRequest) -> operations.PostV05UsersAuthOnInitResponse:
        r"""Response to user authentication initialization from HIP
        If the patient's id is valid, CM will return a transactionId as initialization of user auth. If the request is valid, then 'auth.mode' will convey how the authentication should be done. The authentication can be *mediated* or *direct*. For mediated authentication modes, HIP or HIU is epected to send over relevant code (OTP/token) or demographic info via subsequent API call to /auth/confirm. for direct authentication case, CM will notify requester through/users/auth/notify API. 
        
          1. **auth.mode** conveys whats the mode of authentication is, and what is expected from HIP/HIU in the subsequent /auth/confirm API call. Possible values 
              1. MOBILE_OTP - auth via OTP to registered mobile. Mediated. 
              2. AADHAAR_OTP - auth initiated with Aadhaar with OTP. Mediated. 
              3. DEMOGRAPHICS - auth initiated with demographic verification
              4. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS. In this case, the HIP/HIU is not expected to call subsequent /auth/confirm call. CM will do direct authentication with the User (e.g. Mobile App, SMS etc) and will notify requester
          2. **meta.expiry** conveys the expiry time of the token and the authentication session
          3. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both. 
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
          
        The error section in the body, represents the potential errors that may have occurred. Possible reasons:
          1. Patient id is invalid
        
        """
        
        base_url = operations.POST_V0_5_USERS_AUTH_ON_INIT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v0.5/users/auth/on-init"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05UsersAuthOnInitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_users_auth_on_notify(self, request: operations.PostV05UsersAuthOnNotifyRequest) -> operations.PostV05UsersAuthOnNotifyResponse:
        r"""callback API by HIU/HIPs as acknowledgement of auth notification
        This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v0.5/users/auth/on-notify"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05UsersAuthOnNotifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
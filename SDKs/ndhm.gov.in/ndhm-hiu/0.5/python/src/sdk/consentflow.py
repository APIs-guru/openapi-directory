import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ConsentFlow:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def post_v0_5_consent_requests_on_init(self, request: operations.PostV05ConsentRequestsOnInitRequest) -> operations.PostV05ConsentRequestsOnInitResponse:
        r"""Response to consent request
        Result of consent request creation for a patient. **id** represents the consentrequest id created by CM. The result must contain either **id** or the **error** caused. <br/>
          Reasons for error may be
          * Invalid references (e.g patient id, hiu id), purpose, hiTypes, ranges, persmission
        
        """
        
        base_url = operations.POST_V0_5_CONSENT_REQUESTS_ON_INIT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v0.5/consent-requests/on-init"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05ConsentRequestsOnInitResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def post_v0_5_consent_requests_on_status(self, request: operations.PostV05ConsentRequestsOnStatusRequest) -> operations.PostV05ConsentRequestsOnStatusResponse:
        r"""Result of consent request status
        Result of consent request done previously. Status of request can be GRANTED,  DENIED, EXPIRED. If the request was GRANTED, then 
        
        """
        
        base_url = operations.POST_V0_5_CONSENT_REQUESTS_ON_STATUS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v0.5/consent-requests/on-status"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05ConsentRequestsOnStatusResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def post_v0_5_consents_hiu_notify(self, request: operations.PostV05ConsentsHiuNotifyRequest) -> operations.PostV05ConsentsHiuNotifyResponse:
        r"""Consent notification
        Health information user will get notified about the consent request granted or denied, consent revoked, consent expired. 
        1. For consent request grant, status=GRANTED, consentRequestId=<consent-request-id>, and consentArtefacts is an array of generated consent artefact Ids.
        2. For consent request expiry, status=EXPIRED, consentRequestId=<consent-request-id>
        3. For consent request denied, status=DENIED, consentRequestId=<consent-request-id>
        4. For consent revocation, status=REVOKED, consentArtefacts is an array of revoked consent artefact ids
        
        """
        
        base_url = operations.POST_V0_5_CONSENTS_HIU_NOTIFY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v0.5/consents/hiu/notify"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05ConsentsHiuNotifyResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def post_v0_5_consents_on_fetch(self, request: operations.PostV05ConsentsOnFetchRequest) -> operations.PostV05ConsentsOnFetchResponse:
        r"""Result of fetch request for a consent artefact
        Must contain either consent or error. Possible reason of errors are 
        1. consentId passed through /fetch is invalid
        
        """
        
        base_url = operations.POST_V0_5_CONSENTS_ON_FETCH_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v0.5/consents/on-fetch"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05ConsentsOnFetchResponse(status_code=r.status_code, content_type=content_type)
        
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

    
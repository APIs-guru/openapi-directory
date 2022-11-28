import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class AccountInformationServiceAis:
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

    
    def create_consent(self, request: operations.CreateConsentRequest) -> operations.CreateConsentResponse:
        r"""Create consent
        This method create a consent resource, defining access rights to dedicated accounts of 
        a given PSU-ID. These accounts are addressed explicitly in the method as 
        parameters as a core function.
        
        **Side Effects**
        When this consent request is a request where the \"recurringIndicator\" equals \"true\",
        and if it exists already a former consent for recurring access on account information 
        for the addressed PSU, then the former consent automatically expires as soon as the new 
        consent request is authorised by the PSU.
        
        Optional Extension:
        As an option, an ASPSP might optionally accept a specific access right on the access on all PSD2 related services for all available accounts.
        
        As another option an ASPSP might optionally also accept a command, where only access rights are inserted without mentioning the addressed account. 
        The relation to accounts is then handled afterwards between PSU and ASPSP. 
        This option is not supported for the Embedded SCA Approach. 
        As a last option, an ASPSP might in addition accept a command with access rights
          * to see the list of available payment accounts or
          * to see the list of available payment accounts with balances.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/consents"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateConsentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsentsResponse201])
                res.consents_response_201 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgAis])
                res.error400_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Ais])
                res.error400_ais = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgAis])
                res.error401_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Ais])
                res.error401_ais = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgAis])
                res.error403_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Ais])
                res.error403_ais = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgAis])
                res.error404_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Ais])
                res.error404_ais = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgAis])
                res.error405_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Ais])
                res.error405_ais = out
        elif r.status_code == 406:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406NgAis])
                res.error406_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406Ais])
                res.error406_ais = out
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgAis])
                res.error409_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Ais])
                res.error409_ais = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429NgAis])
                res.error429_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429Ais])
                res.error429_ais = out
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def delete_consent(self, request: operations.DeleteConsentRequest) -> operations.DeleteConsentResponse:
        r"""Delete Consent
        The TPP can delete an account information consent object if needed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/consents/{consentId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConsentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            res.headers = r.headers
            
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgAis])
                res.error400_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Ais])
                res.error400_ais = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgAis])
                res.error401_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Ais])
                res.error401_ais = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgAis])
                res.error403_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Ais])
                res.error403_ais = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgAis])
                res.error404_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Ais])
                res.error404_ais = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgAis])
                res.error405_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Ais])
                res.error405_ais = out
        elif r.status_code == 406:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406NgAis])
                res.error406_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406Ais])
                res.error406_ais = out
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgAis])
                res.error409_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Ais])
                res.error409_ais = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429NgAis])
                res.error429_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429Ais])
                res.error429_ais = out
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def get_account_list(self, request: operations.GetAccountListRequest) -> operations.GetAccountListResponse:
        r"""Read account list
        Read the identifiers of the available payment account together with 
        booking balance information, depending on the consent granted.
        
        It is assumed that a consent of the PSU to this access is already given and stored on the ASPSP system.
        The addressed list of accounts depends then on the PSU ID and the stored consent addressed by consentId,
        respectively the OAuth2 access token.
        
        Returns all identifiers of the accounts, to which an account access has been granted to through
        the /consents endpoint by the PSU.
        In addition, relevant information about the accounts and hyperlinks to corresponding account
        information resources are provided if a related consent has been already granted.
        
        Remark: Note that the /consents endpoint optionally offers to grant an access on all available
        payment accounts of a PSU.
        In this case, this endpoint will deliver the information about all available payment accounts
        of the PSU at this ASPSP.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/accounts"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountList])
                res.account_list = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgAis])
                res.error400_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Ais])
                res.error400_ais = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgAis])
                res.error401_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Ais])
                res.error401_ais = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgAis])
                res.error403_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Ais])
                res.error403_ais = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgAis])
                res.error404_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Ais])
                res.error404_ais = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgAis])
                res.error405_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Ais])
                res.error405_ais = out
        elif r.status_code == 406:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406NgAis])
                res.error406_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406Ais])
                res.error406_ais = out
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgAis])
                res.error409_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Ais])
                res.error409_ais = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429NgAis])
                res.error429_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429Ais])
                res.error429_ais = out
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def get_balances(self, request: operations.GetBalancesRequest) -> operations.GetBalancesResponse:
        r"""Read balance
        Reads account data from a given account addressed by \"account-id\". 
        
        **Remark:** This account-id can be a tokenised identification due to data protection reason since the path 
        information might be logged on intermediary servers within the ASPSP sphere. 
        This account-id then can be retrieved by the \"Get account list\" call.
        
        The account-id is constant at least throughout the lifecycle of a given consent.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/accounts/{account-id}/balances", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBalancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReadAccountBalanceResponse200])
                res.read_account_balance_response_200 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgAis])
                res.error400_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Ais])
                res.error400_ais = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgAis])
                res.error401_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Ais])
                res.error401_ais = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgAis])
                res.error403_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Ais])
                res.error403_ais = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgAis])
                res.error404_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Ais])
                res.error404_ais = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgAis])
                res.error405_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Ais])
                res.error405_ais = out
        elif r.status_code == 406:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406NgAis])
                res.error406_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406Ais])
                res.error406_ais = out
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgAis])
                res.error409_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Ais])
                res.error409_ais = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429NgAis])
                res.error429_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429Ais])
                res.error429_ais = out
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def get_consent_authorisation(self, request: operations.GetConsentAuthorisationRequest) -> operations.GetConsentAuthorisationResponse:
        r"""Get consent authorisation sub-resources request
        Return a list of all authorisation subresources IDs which have been created.
        
        This function returns an array of hyperlinks to all generated authorisation sub-resources.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/consents/{consentId}/authorisations", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsentAuthorisationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Authorisations])
                res.authorisations = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgAis])
                res.error400_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Ais])
                res.error400_ais = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgAis])
                res.error401_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Ais])
                res.error401_ais = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgAis])
                res.error403_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Ais])
                res.error403_ais = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgAis])
                res.error404_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Ais])
                res.error404_ais = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgAis])
                res.error405_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Ais])
                res.error405_ais = out
        elif r.status_code == 406:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406NgAis])
                res.error406_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406Ais])
                res.error406_ais = out
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgAis])
                res.error409_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Ais])
                res.error409_ais = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429NgAis])
                res.error429_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429Ais])
                res.error429_ais = out
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def get_consent_information(self, request: operations.GetConsentInformationRequest) -> operations.GetConsentInformationResponse:
        r"""Get consent request
        Returns the content of an account information consent object. 
        This is returning the data for the TPP especially in cases, 
        where the consent was directly managed between ASPSP and PSU e.g. in a redirect SCA Approach.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/consents/{consentId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsentInformationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsentInformationResponse200JSON])
                res.consent_information_response_200_json = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgAis])
                res.error400_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Ais])
                res.error400_ais = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgAis])
                res.error401_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Ais])
                res.error401_ais = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgAis])
                res.error403_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Ais])
                res.error403_ais = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgAis])
                res.error404_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Ais])
                res.error404_ais = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgAis])
                res.error405_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Ais])
                res.error405_ais = out
        elif r.status_code == 406:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406NgAis])
                res.error406_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406Ais])
                res.error406_ais = out
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgAis])
                res.error409_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Ais])
                res.error409_ais = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429NgAis])
                res.error429_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429Ais])
                res.error429_ais = out
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def get_consent_sca_status(self, request: operations.GetConsentScaStatusRequest) -> operations.GetConsentScaStatusResponse:
        r"""Read the SCA status of the consent authorisation
        This method returns the SCA status of a consent initiation's authorisation sub-resource.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/consents/{consentId}/authorisations/{authorisationId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsentScaStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScaStatusResponse])
                res.sca_status_response = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgAis])
                res.error400_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Ais])
                res.error400_ais = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgAis])
                res.error401_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Ais])
                res.error401_ais = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgAis])
                res.error403_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Ais])
                res.error403_ais = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgAis])
                res.error404_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Ais])
                res.error404_ais = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgAis])
                res.error405_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Ais])
                res.error405_ais = out
        elif r.status_code == 406:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406NgAis])
                res.error406_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406Ais])
                res.error406_ais = out
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgAis])
                res.error409_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Ais])
                res.error409_ais = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429NgAis])
                res.error429_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429Ais])
                res.error429_ais = out
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def get_consent_status(self, request: operations.GetConsentStatusRequest) -> operations.GetConsentStatusResponse:
        r"""Consent status request
        Read the status of an account information consent resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/consents/{consentId}/status", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsentStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsentStatusResponse200])
                res.consent_status_response_200 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgAis])
                res.error400_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Ais])
                res.error400_ais = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgAis])
                res.error401_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Ais])
                res.error401_ais = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgAis])
                res.error403_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Ais])
                res.error403_ais = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgAis])
                res.error404_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Ais])
                res.error404_ais = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgAis])
                res.error405_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Ais])
                res.error405_ais = out
        elif r.status_code == 406:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406NgAis])
                res.error406_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406Ais])
                res.error406_ais = out
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgAis])
                res.error409_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Ais])
                res.error409_ais = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429NgAis])
                res.error429_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429Ais])
                res.error429_ais = out
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def get_transaction_details(self, request: operations.GetTransactionDetailsRequest) -> operations.GetTransactionDetailsResponse:
        r"""Read transaction details
        Reads transaction details from a given transaction addressed by \"transactionId\" on a given account addressed by \"account-id\".
        This call is only available on transactions as reported in a JSON format.
        
        **Remark:** Please note that the PATH might be already given in detail by the corresponding entry of the response of the
        \"Read Transaction List\" call within the _links subfield.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/accounts/{account-id}/transactions/{transactionId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransactionDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTransactionDetails200ApplicationJSON])
                res.get_transaction_details_200_application_json_object = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgAis])
                res.error400_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Ais])
                res.error400_ais = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgAis])
                res.error401_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Ais])
                res.error401_ais = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgAis])
                res.error403_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Ais])
                res.error403_ais = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgAis])
                res.error404_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Ais])
                res.error404_ais = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgAis])
                res.error405_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Ais])
                res.error405_ais = out
        elif r.status_code == 406:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406NgAis])
                res.error406_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406Ais])
                res.error406_ais = out
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgAis])
                res.error409_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Ais])
                res.error409_ais = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429NgAis])
                res.error429_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429Ais])
                res.error429_ais = out
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def get_transaction_list(self, request: operations.GetTransactionListRequest) -> operations.GetTransactionListResponse:
        r"""Read transaction list of an account
        Read transaction reports or transaction lists of a given account ddressed by \"account-id\", depending on the steering parameter
        \"bookingStatus\" together with balances.
        
        For a given account, additional parameters are e.g. the attributes \"dateFrom\" and \"dateTo\".
        The ASPSP might add balance information, if transaction lists without balances are not supported.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/accounts/{account-id}/transactions", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransactionListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TransactionsResponse200JSON])
                res.transactions_response_200_json = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgAis])
                res.error400_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Ais])
                res.error400_ais = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgAis])
                res.error401_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Ais])
                res.error401_ais = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgAis])
                res.error403_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Ais])
                res.error403_ais = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgAis])
                res.error404_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Ais])
                res.error404_ais = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgAis])
                res.error405_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Ais])
                res.error405_ais = out
        elif r.status_code == 406:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406NgAis])
                res.error406_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406Ais])
                res.error406_ais = out
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgAis])
                res.error409_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Ais])
                res.error409_ais = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429NgAis])
                res.error429_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429Ais])
                res.error429_ais = out
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def read_account_details(self, request: operations.ReadAccountDetailsRequest) -> operations.ReadAccountDetailsResponse:
        r"""Read account details
        Reads details about an account, with balances where required. 
        It is assumed that a consent of the PSU to 
        this access is already given and stored on the ASPSP system. 
        The addressed details of this account depends then on the stored consent addressed by consentId, 
        respectively the OAuth2 access token.
        
        **NOTE:** The account-id can represent a multicurrency account.
        In this case the currency code is set to \"XXX\".
        
        Give detailed information about the addressed account.
        
        Give detailed information about the addressed account together with balance information
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/accounts/{account-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReadAccountDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReadAccountDetails200ApplicationJSON])
                res.read_account_details_200_application_json_object = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgAis])
                res.error400_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Ais])
                res.error400_ais = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgAis])
                res.error401_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Ais])
                res.error401_ais = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgAis])
                res.error403_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Ais])
                res.error403_ais = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgAis])
                res.error404_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Ais])
                res.error404_ais = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgAis])
                res.error405_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Ais])
                res.error405_ais = out
        elif r.status_code == 406:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406NgAis])
                res.error406_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406Ais])
                res.error406_ais = out
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgAis])
                res.error409_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Ais])
                res.error409_ais = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429NgAis])
                res.error429_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429Ais])
                res.error429_ais = out
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def start_consent_authorisation(self, request: operations.StartConsentAuthorisationRequest) -> operations.StartConsentAuthorisationResponse:
        r"""Start the authorisation process for a consent
        Create an authorisation sub-resource and start the authorisation process of a consent.
        The message might in addition transmit authentication and authorisation related data.
        
        his method is iterated n times for a n times SCA authorisation in a
        corporate context, each creating an own authorisation sub-endpoint for
        the corresponding PSU authorising the consent.
        
        The ASPSP might make the usage of this access method unnecessary,
        since the related authorisation resource will be automatically created by
        the ASPSP after the submission of the consent data with the first POST consents call.
        
        The start authorisation process is a process which is needed for creating a new authorisation
        or cancellation sub-resource.
        
        This applies in the following scenarios:
        
          * The ASPSP has indicated with an 'startAuthorisation' hyperlink in the preceding Payment 
            initiation response that an explicit start of the authorisation process is needed by the TPP. 
            The 'startAuthorisation' hyperlink can transport more information about data which needs to be 
            uploaded by using the extended forms:
            * 'startAuthorisationWithPsuIdentfication', 
            * 'startAuthorisationWithPsuAuthentication' 
            * 'startAuthorisationWithEncryptedPsuAuthentication'
            * 'startAuthorisationWithAuthentciationMethodSelection'
          * The related payment initiation cannot yet be executed since a multilevel SCA is mandated.
          * The ASPSP has indicated with an 'startAuthorisation' hyperlink in the preceding 
            payment cancellation response that an explicit start of the authorisation process is needed by the TPP. 
            The 'startAuthorisation' hyperlink can transport more information about data which needs to be uploaded 
            by using the extended forms as indicated above.
          * The related payment cancellation request cannot be applied yet since a multilevel SCA is mandate for
            executing the cancellation.
          * The signing basket needs to be authorised yet.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/consents/{consentId}/authorisations", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StartConsentAuthorisationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StartScaprocessResponse])
                res.start_scaprocess_response = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgAis])
                res.error400_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Ais])
                res.error400_ais = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgAis])
                res.error401_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Ais])
                res.error401_ais = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgAis])
                res.error403_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Ais])
                res.error403_ais = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgAis])
                res.error404_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Ais])
                res.error404_ais = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgAis])
                res.error405_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Ais])
                res.error405_ais = out
        elif r.status_code == 406:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406NgAis])
                res.error406_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406Ais])
                res.error406_ais = out
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgAis])
                res.error409_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Ais])
                res.error409_ais = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429NgAis])
                res.error429_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429Ais])
                res.error429_ais = out
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def update_consents_psu_data(self, request: operations.UpdateConsentsPsuDataRequest) -> operations.UpdateConsentsPsuDataResponse:
        r"""Update PSU Data for consents
        This method update PSU data on the consents  resource if needed.
        It may authorise a consent within the Embedded SCA Approach where needed.
        
        Independently from the SCA Approach it supports e.g. the selection of
        the authentication method and a non-SCA PSU authentication.
        
        There are several possible update PSU data requests in the context of a consent request if needed, 
        which depends on the SCA approach:
        
        * Redirect SCA Approach:
          A specific Update PSU data request is applicable for 
            * the selection of authentication methods, before choosing the actual SCA approach.
        * Decoupled SCA Approach:
          A specific update PSU data request is only applicable for
          * adding the PSU Identification, if not provided yet in the payment initiation request or the Account Information Consent Request, or if no OAuth2 access token is used, or
          * the selection of authentication methods.
        * Embedded SCA Approach: 
          The Update PSU data request might be used 
          * to add credentials as a first factor authentication data of the PSU and
          * to select the authentication method and
          * transaction authorisation.
        
        The SCA Approach might depend on the chosen SCA method. 
        For that reason, the following possible update PSU data request can apply to all SCA approaches:
        
        * Select an SCA method in case of several SCA methods are available for the customer.
        
        There are the following request types on this access path:
          * Update PSU identification
          * Update PSU authentication
          * Select PSU autorization method 
            WARNING: This method needs a reduced header, 
            therefore many optional elements are not present. 
            Maybe in a later version the access path will change.
          * Transaction Authorisation
            WARNING: This method needs a reduced header, 
            therefore many optional elements are not present. 
            Maybe in a later version the access path will change.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/consents/{consentId}/authorisations/{authorisationId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConsentsPsuDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.update_consents_psu_data_200_application_json_one_of = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgAis])
                res.error400_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Ais])
                res.error400_ais = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgAis])
                res.error401_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Ais])
                res.error401_ais = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgAis])
                res.error403_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Ais])
                res.error403_ais = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgAis])
                res.error404_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Ais])
                res.error404_ais = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgAis])
                res.error405_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Ais])
                res.error405_ais = out
        elif r.status_code == 406:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406NgAis])
                res.error406_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406Ais])
                res.error406_ais = out
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgAis])
                res.error409_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Ais])
                res.error409_ais = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429NgAis])
                res.error429_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429Ais])
                res.error429_ais = out
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
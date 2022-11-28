import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Keys:
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

    
    def check_key_usability(self, request: operations.CheckKeyUsabilityRequest) -> operations.CheckKeyUsabilityResponse:
        r"""checkKeyUsability
        Currently returns whether the key is useable via the `available` property.
        You may Use this method to discover if the key is useable before making
        further requests.
        
        When the `user_token` is not provided, this API returns public information on key. 
        
        ### Testing
        
        To test your implementation of our API, you may use the following test keys.
        
        - **iddqd** Availability will return as `true`
        - **idkfa** Availability will return as `false`
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/keys/{key}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckKeyUsabilityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.KeyUsabilityResponseSchema])
                res.key_usability_response_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AddressLookupResponseSchema])
                res.address_lookup_response_schema = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AddressLookupResponseSchema])
                res.address_lookup_response_schema = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AddressLookupResponseSchema])
                res.address_lookup_response_schema = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AddressLookupResponseSchema])
                res.address_lookup_response_schema = out
        elif r.status_code == 503:
            pass

        return res

    
    def download_usage_history(self, request: operations.DownloadUsageHistoryRequest) -> operations.DownloadUsageHistoryResponse:
        r"""downloadUsageHistory
        Returns a CSV download of lookups performed and associated information.
        
        Note that the `Content-Type` returned will be CSV (text/csv). For a non 200
        response, the `Content-Type` will revert to JSON with the error code and
        message embedded.
        
        This method requires a `user_token`, which can be found on your [accounts page](https://ideal-postcodes.co.uk/account).
        
        A maximum interval of 90 days can be provided for analysis. If no start or end date is provided, the last 21 days will be used as the default interval.
        
        ### GDPR Update
        
        After May 2018, the API will begin to redact IP Address, Search Term and URL data that is older than 28 days from our stores on a weekly basis as part of our new data protection strategy. This means the aforementioned data points will no longer be retrievable from this API if it is more than 28 days old.
        
        Reach out to us by [mail](<mailto:support@ideal-postcodes.co.uk>) or [chat](https://chat.ideal-postcodes.co.uk) if you would like to modify this 28 day window or prefer this data not be collected at all.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/keys/{key}/lookups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DownloadUsageHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/csv"):
                res.download_usage_history_200_text_csv_string = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseSchema])
                res.error_response_schema = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseSchema])
                res.error_response_schema = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseSchema])
                res.error_response_schema = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseSchema])
                res.error_response_schema = out
        elif r.status_code == 503:
            pass

        return res

    
    def monitor_key_usage(self, request: operations.MonitorKeyUsageRequest) -> operations.MonitorKeyUsageResponse:
        r"""monitorKeyUsage
        Reports the number of lookups consumed on a key for a range of days.
        
        This method requires a `user_token`, which can be found on your [accounts page](https://ideal-postcodes.co.uk/account).
        
        A maximum interval of 90 days can be provided for analysis. If no start or
        end date is provided, the last 21 days will be used as the default interval.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/keys/{key}/usage", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitorKeyUsageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.KeyUsageResponseSchema])
                res.key_usage_response_schema = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseSchema])
                res.error_response_schema = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseSchema])
                res.error_response_schema = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseSchema])
                res.error_response_schema = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseSchema])
                res.error_response_schema = out
        elif r.status_code == 503:
            pass

        return res

    
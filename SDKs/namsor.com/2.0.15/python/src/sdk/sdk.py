
__doc__ = """ SDK Documentation: https://github.com/namsor - NamSor API client SDKs v2 for Java, Python"""
import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://v2.namsor.com/NamSorAPIv2",
]


class SDK:
    r"""SDK Documentation: https://github.com/namsor - NamSor API client SDKs v2 for Java, Python"""

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
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
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def anonymize(self, request: operations.AnonymizeRequest) -> operations.AnonymizeResponse:
        r"""Activate/deactivate anonymization for a source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/anonymize/{source}/{anonymized}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AnonymizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def api_status(self) -> operations.APIStatusResponse:
        r"""Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/apiStatus"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.APIStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIClassifiersStatusOut])
                res.api_classifiers_status_out = out
        elif r.status_code == 401:
            pass

        return res

    
    def api_usage(self, request: operations.APIUsageRequest) -> operations.APIUsageResponse:
        r"""Print current API usage.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/apiUsage"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.APIUsageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPeriodUsageOut])
                res.api_period_usage_out = out
        elif r.status_code == 401:
            pass

        return res

    
    def api_usage_history(self, request: operations.APIUsageHistoryRequest) -> operations.APIUsageHistoryResponse:
        r"""Print historical API usage.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/apiUsageHistory"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.APIUsageHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIUsageHistoryOut])
                res.api_usage_history_out = out
        elif r.status_code == 401:
            pass

        return res

    
    def api_usage_history_aggregate(self, request: operations.APIUsageHistoryAggregateRequest) -> operations.APIUsageHistoryAggregateResponse:
        r"""Print historical API usage (in an aggregated view, by service, by day/hour/min).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/apiUsageHistoryAggregate"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.APIUsageHistoryAggregateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIUsageAggregatedOut])
                res.api_usage_aggregated_out = out
        elif r.status_code == 401:
            pass

        return res

    
    def available_services(self) -> operations.AvailableServicesResponse:
        r"""List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/apiServices"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AvailableServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIServicesOut])
                res.api_services_out = out
        elif r.status_code == 401:
            pass

        return res

    
    def chinese_name_candidates(self, request: operations.ChineseNameCandidatesRequest) -> operations.ChineseNameCandidatesResponse:
        r"""Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ChineseNameCandidatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NameMatchCandidatesOut])
                res.name_match_candidates_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def chinese_name_candidates_batch(self, request: operations.ChineseNameCandidatesBatchRequest) -> operations.ChineseNameCandidatesBatchResponse:
        r"""Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/chineseNameCandidatesBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChineseNameCandidatesBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchNameMatchCandidatesOut])
                res.batch_name_match_candidates_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def chinese_name_candidates_gender_batch(self, request: operations.ChineseNameCandidatesGenderBatchRequest) -> operations.ChineseNameCandidatesGenderBatchResponse:
        r"""Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/chineseNameCandidatesGenderBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChineseNameCandidatesGenderBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchNameMatchCandidatesOut])
                res.batch_name_match_candidates_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def chinese_name_gender_candidates(self, request: operations.ChineseNameGenderCandidatesRequest) -> operations.ChineseNameGenderCandidatesResponse:
        r"""Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ChineseNameGenderCandidatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NameMatchCandidatesOut])
                res.name_match_candidates_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def chinese_name_match(self, request: operations.ChineseNameMatchRequest) -> operations.ChineseNameMatchResponse:
        r"""Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ChineseNameMatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NameMatchedOut])
                res.name_matched_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def chinese_name_match_batch(self, request: operations.ChineseNameMatchBatchRequest) -> operations.ChineseNameMatchBatchResponse:
        r"""Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/chineseNameMatchBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChineseNameMatchBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchNameMatchedOut])
                res.batch_name_matched_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def corridor(self, request: operations.CorridorRequest) -> operations.CorridorResponse:
        r"""[USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CorridorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CorridorOut])
                res.corridor_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def corridor_batch(self, request: operations.CorridorBatchRequest) -> operations.CorridorBatchResponse:
        r"""[USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/corridorBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CorridorBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchCorridorOut])
                res.batch_corridor_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def country(self, request: operations.CountryRequest) -> operations.CountryResponse:
        r"""[USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/country/{personalNameFull}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CountryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonalNameGeoOut])
                res.personal_name_geo_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def country_batch(self, request: operations.CountryBatchRequest) -> operations.CountryBatchResponse:
        r"""[USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/countryBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CountryBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchPersonalNameGeoOut])
                res.batch_personal_name_geo_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def diaspora(self, request: operations.DiasporaRequest) -> operations.DiasporaResponse:
        r"""[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/diaspora/{countryIso2}/{firstName}/{lastName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DiasporaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstLastNameDiasporaedOut])
                res.first_last_name_diasporaed_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def diaspora_batch(self, request: operations.DiasporaBatchRequest) -> operations.DiasporaBatchResponse:
        r"""[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/diasporaBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DiasporaBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchFirstLastNameDiasporaedOut])
                res.batch_first_last_name_diasporaed_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def disable(self, request: operations.DisableRequest) -> operations.DisableResponse:
        r"""Activate/deactivate an API Key.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/disable/{source}/{disabled}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DisableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def gender(self, request: operations.GenderRequest) -> operations.GenderResponse:
        r"""Infer the likely gender of a name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/gender/{firstName}/{lastName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstLastNameGenderedOut])
                res.first_last_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_batch(self, request: operations.GenderBatchRequest) -> operations.GenderBatchResponse:
        r"""Infer the likely gender of up to 100 names, detecting automatically the cultural context.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/genderBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchFirstLastNameGenderedOut])
                res.batch_first_last_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_chinese_name(self, request: operations.GenderChineseNameRequest) -> operations.GenderChineseNameResponse:
        r"""Infer the likely gender of a Chinese full name ex. 王晓明
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/genderChineseName/{chineseName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderChineseNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonalNameGenderedOut])
                res.personal_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_chinese_name_batch(self, request: operations.GenderChineseNameBatchRequest) -> operations.GenderChineseNameBatchResponse:
        r"""Infer the likely gender of up to 100 full names ex. 王晓明
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/genderChineseNameBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderChineseNameBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchPersonalNameGenderedOut])
                res.batch_personal_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_chinese_name_pinyin(self, request: operations.GenderChineseNamePinyinRequest) -> operations.GenderChineseNamePinyinResponse:
        r"""Infer the likely gender of a Chinese name in LATIN (Pinyin).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderChineseNamePinyinResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstLastNameGenderedOut])
                res.first_last_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_chinese_name_pinyin_batch(self, request: operations.GenderChineseNamePinyinBatchRequest) -> operations.GenderChineseNamePinyinBatchResponse:
        r"""Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/genderChineseNamePinyinBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderChineseNamePinyinBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchFirstLastNameGenderedOut])
                res.batch_first_last_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_full(self, request: operations.GenderFullRequest) -> operations.GenderFullResponse:
        r"""Infer the likely gender of a full name, ex. John H. Smith
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/genderFull/{fullName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderFullResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonalNameGenderedOut])
                res.personal_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_full_batch(self, request: operations.GenderFullBatchRequest) -> operations.GenderFullBatchResponse:
        r"""Infer the likely gender of up to 100 full names, detecting automatically the cultural context.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/genderFullBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderFullBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchPersonalNameGenderedOut])
                res.batch_personal_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_full_geo(self, request: operations.GenderFullGeoRequest) -> operations.GenderFullGeoResponse:
        r"""Infer the likely gender of a full name, given a local context (ISO2 country code).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/genderFullGeo/{fullName}/{countryIso2}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderFullGeoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonalNameGenderedOut])
                res.personal_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_full_geo_batch(self, request: operations.GenderFullGeoBatchRequest) -> operations.GenderFullGeoBatchResponse:
        r"""Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/genderFullGeoBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderFullGeoBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchPersonalNameGenderedOut])
                res.batch_personal_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_geo(self, request: operations.GenderGeoRequest) -> operations.GenderGeoResponse:
        r"""Infer the likely gender of a name, given a local context (ISO2 country code).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/genderGeo/{firstName}/{lastName}/{countryIso2}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderGeoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstLastNameGenderedOut])
                res.first_last_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_geo_batch(self, request: operations.GenderGeoBatchRequest) -> operations.GenderGeoBatchResponse:
        r"""Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/genderGeoBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderGeoBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchFirstLastNameGenderedOut])
                res.batch_first_last_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_japanese_name_full(self, request: operations.GenderJapaneseNameFullRequest) -> operations.GenderJapaneseNameFullResponse:
        r"""Infer the likely gender of a Japanese full name ex. 王晓明
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/genderJapaneseNameFull/{japaneseName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderJapaneseNameFullResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonalNameGenderedOut])
                res.personal_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_japanese_name_full_batch(self, request: operations.GenderJapaneseNameFullBatchRequest) -> operations.GenderJapaneseNameFullBatchResponse:
        r"""Infer the likely gender of up to 100 full names
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/genderJapaneseNameFullBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderJapaneseNameFullBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchPersonalNameGenderedOut])
                res.batch_personal_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_japanese_name_pinyin(self, request: operations.GenderJapaneseNamePinyinRequest) -> operations.GenderJapaneseNamePinyinResponse:
        r"""Infer the likely gender of a Japanese name in LATIN (Pinyin).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/genderJapaneseName/{japaneseSurname}/{japaneseGivenName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderJapaneseNamePinyinResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstLastNameGenderedOut])
                res.first_last_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def gender_japanese_name_pinyin_batch(self, request: operations.GenderJapaneseNamePinyinBatchRequest) -> operations.GenderJapaneseNamePinyinBatchResponse:
        r"""Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/genderJapaneseNameBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderJapaneseNamePinyinBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchFirstLastNameGenderedOut])
                res.batch_first_last_name_gendered_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def japanese_name_gender_kanji_candidates_batch(self, request: operations.JapaneseNameGenderKanjiCandidatesBatchRequest) -> operations.JapaneseNameGenderKanjiCandidatesBatchResponse:
        r"""Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/japaneseNameGenderKanjiCandidatesBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JapaneseNameGenderKanjiCandidatesBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchNameMatchCandidatesOut])
                res.batch_name_match_candidates_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def japanese_name_kanji_candidates(self, request: operations.JapaneseNameKanjiCandidatesRequest) -> operations.JapaneseNameKanjiCandidatesResponse:
        r"""Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{knownGender}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.JapaneseNameKanjiCandidatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NameMatchCandidatesOut])
                res.name_match_candidates_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def japanese_name_kanji_candidates_batch(self, request: operations.JapaneseNameKanjiCandidatesBatchRequest) -> operations.JapaneseNameKanjiCandidatesBatchResponse:
        r"""Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/japaneseNameKanjiCandidatesBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JapaneseNameKanjiCandidatesBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchNameMatchCandidatesOut])
                res.batch_name_match_candidates_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def japanese_name_kanji_candidates_1(self, request: operations.JapaneseNameKanjiCandidates1Request) -> operations.JapaneseNameKanjiCandidates1Response:
        r"""Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.JapaneseNameKanjiCandidates1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NameMatchCandidatesOut])
                res.name_match_candidates_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def japanese_name_latin_candidates(self, request: operations.JapaneseNameLatinCandidatesRequest) -> operations.JapaneseNameLatinCandidatesResponse:
        r"""Romanize japanese name, based on the name in Kanji.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.JapaneseNameLatinCandidatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NameMatchCandidatesOut])
                res.name_match_candidates_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def japanese_name_latin_candidates_batch(self, request: operations.JapaneseNameLatinCandidatesBatchRequest) -> operations.JapaneseNameLatinCandidatesBatchResponse:
        r"""Romanize japanese names, based on the name in KANJI
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/japaneseNameLatinCandidatesBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JapaneseNameLatinCandidatesBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchNameMatchCandidatesOut])
                res.batch_name_match_candidates_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def japanese_name_match(self, request: operations.JapaneseNameMatchRequest) -> operations.JapaneseNameMatchResponse:
        r"""Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.JapaneseNameMatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NameMatchedOut])
                res.name_matched_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def japanese_name_match_batch(self, request: operations.JapaneseNameMatchBatchRequest) -> operations.JapaneseNameMatchBatchResponse:
        r"""Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/japaneseNameMatchBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JapaneseNameMatchBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchNameMatchedOut])
                res.batch_name_matched_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def japanese_name_match_feedback_loop(self, request: operations.JapaneseNameMatchFeedbackLoopRequest) -> operations.JapaneseNameMatchFeedbackLoopResponse:
        r"""[CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.JapaneseNameMatchFeedbackLoopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FeedbackLoopOut])
                res.feedback_loop_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def learnable(self, request: operations.LearnableRequest) -> operations.LearnableResponse:
        r"""Activate/deactivate learning from a source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/learnable/{source}/{learnable}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LearnableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def name_type(self, request: operations.NameTypeRequest) -> operations.NameTypeResponse:
        r"""Infer the likely type of a proper noun (personal name, brand name, place name etc.)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/nameType/{properNoun}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.NameTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProperNounCategorizedOut])
                res.proper_noun_categorized_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def name_type_batch(self, request: operations.NameTypeBatchRequest) -> operations.NameTypeBatchResponse:
        r"""Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/nameTypeBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.NameTypeBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchProperNounCategorizedOut])
                res.batch_proper_noun_categorized_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def name_type_geo(self, request: operations.NameTypeGeoRequest) -> operations.NameTypeGeoResponse:
        r"""Infer the likely type of a proper noun (personal name, brand name, place name etc.)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/nameTypeGeo/{properNoun}/{countryIso2}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.NameTypeGeoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProperNounCategorizedOut])
                res.proper_noun_categorized_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def name_type_geo_batch(self, request: operations.NameTypeGeoBatchRequest) -> operations.NameTypeGeoBatchResponse:
        r"""Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/nameTypeGeoBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.NameTypeGeoBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchProperNounCategorizedOut])
                res.batch_proper_noun_categorized_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def origin(self, request: operations.OriginRequest) -> operations.OriginResponse:
        r"""[USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/origin/{firstName}/{lastName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OriginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstLastNameOriginedOut])
                res.first_last_name_origined_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def origin_batch(self, request: operations.OriginBatchRequest) -> operations.OriginBatchResponse:
        r"""[USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/originBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OriginBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchFirstLastNameOriginedOut])
                res.batch_first_last_name_origined_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def parse_chinese_name(self, request: operations.ParseChineseNameRequest) -> operations.ParseChineseNameResponse:
        r"""Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/parseChineseName/{chineseName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ParseChineseNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonalNameParsedOut])
                res.personal_name_parsed_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def parse_chinese_name_batch(self, request: operations.ParseChineseNameBatchRequest) -> operations.ParseChineseNameBatchResponse:
        r"""Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/parseChineseNameBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ParseChineseNameBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchPersonalNameParsedOut])
                res.batch_personal_name_parsed_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def parse_japanese_name(self, request: operations.ParseJapaneseNameRequest) -> operations.ParseJapaneseNameResponse:
        r"""Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/parseJapaneseName/{japaneseName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ParseJapaneseNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonalNameParsedOut])
                res.personal_name_parsed_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def parse_japanese_name_batch(self, request: operations.ParseJapaneseNameBatchRequest) -> operations.ParseJapaneseNameBatchResponse:
        r"""Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/parseJapaneseNameBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ParseJapaneseNameBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchPersonalNameParsedOut])
                res.batch_personal_name_parsed_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def parse_name(self, request: operations.ParseNameRequest) -> operations.ParseNameResponse:
        r"""Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/parseName/{nameFull}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ParseNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonalNameParsedOut])
                res.personal_name_parsed_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def parse_name_batch(self, request: operations.ParseNameBatchRequest) -> operations.ParseNameBatchResponse:
        r"""Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/parseNameBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ParseNameBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchPersonalNameParsedOut])
                res.batch_personal_name_parsed_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def parse_name_geo(self, request: operations.ParseNameGeoRequest) -> operations.ParseNameGeoResponse:
        r"""Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/parseName/{nameFull}/{countryIso2}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ParseNameGeoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonalNameParsedOut])
                res.personal_name_parsed_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def parse_name_geo_batch(self, request: operations.ParseNameGeoBatchRequest) -> operations.ParseNameGeoBatchResponse:
        r"""Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/parseNameGeoBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ParseNameGeoBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchPersonalNameParsedOut])
                res.batch_personal_name_parsed_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def phone_code(self, request: operations.PhoneCodeRequest) -> operations.PhoneCodeResponse:
        r"""[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PhoneCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstLastNamePhoneCodedOut])
                res.first_last_name_phone_coded_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def phone_code_batch(self, request: operations.PhoneCodeBatchRequest) -> operations.PhoneCodeBatchResponse:
        r"""[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/phoneCodeBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PhoneCodeBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchFirstLastNamePhoneCodedOut])
                res.batch_first_last_name_phone_coded_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def phone_code_geo(self, request: operations.PhoneCodeGeoRequest) -> operations.PhoneCodeGeoResponse:
        r"""[USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PhoneCodeGeoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstLastNamePhoneCodedOut])
                res.first_last_name_phone_coded_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def phone_code_geo_batch(self, request: operations.PhoneCodeGeoBatchRequest) -> operations.PhoneCodeGeoBatchResponse:
        r"""[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/phoneCodeGeoBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PhoneCodeGeoBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchFirstLastNamePhoneCodedOut])
                res.batch_first_last_name_phone_coded_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def phone_code_geo_feedback_loop(self, request: operations.PhoneCodeGeoFeedbackLoopRequest) -> operations.PhoneCodeGeoFeedbackLoopResponse:
        r"""[CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PhoneCodeGeoFeedbackLoopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstLastNamePhoneCodedOut])
                res.first_last_name_phone_coded_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def pinyin_chinese_name(self, request: operations.PinyinChineseNameRequest) -> operations.PinyinChineseNameResponse:
        r"""Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/pinyinChineseName/{chineseName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PinyinChineseNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonalNameParsedOut])
                res.personal_name_parsed_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def pinyin_chinese_name_batch(self, request: operations.PinyinChineseNameBatchRequest) -> operations.PinyinChineseNameBatchResponse:
        r"""Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/pinyinChineseNameBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PinyinChineseNameBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchPersonalNameParsedOut])
                res.batch_personal_name_parsed_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def software_version(self) -> operations.SoftwareVersionResponse:
        r"""Get the current software version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/softwareVersion"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SoftwareVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SoftwareVersionOut])
                res.software_version_out = out
        elif r.status_code == 401:
            pass

        return res

    
    def taxonomy_classes(self, request: operations.TaxonomyClassesRequest) -> operations.TaxonomyClassesResponse:
        r"""Print the taxonomy classes valid for the given classifier.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/taxonomyClasses/{classifierName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TaxonomyClassesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIClassifierTaxonomyOut])
                res.api_classifier_taxonomy_out = out
        elif r.status_code == 401:
            pass

        return res

    
    def us_race_ethnicity(self, request: operations.UsRaceEthnicityRequest) -> operations.UsRaceEthnicityResponse:
        r"""[USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/usRaceEthnicity/{firstName}/{lastName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UsRaceEthnicityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstLastNameUsRaceEthnicityOut])
                res.first_last_name_us_race_ethnicity_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def us_race_ethnicity_batch(self, request: operations.UsRaceEthnicityBatchRequest) -> operations.UsRaceEthnicityBatchResponse:
        r"""[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/usRaceEthnicityBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UsRaceEthnicityBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchFirstLastNameUsRaceEthnicityOut])
                res.batch_first_last_name_us_race_ethnicity_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def us_race_ethnicity_zip5(self, request: operations.UsRaceEthnicityZip5Request) -> operations.UsRaceEthnicityZip5Response:
        r"""[USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UsRaceEthnicityZip5Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstLastNameUsRaceEthnicityOut])
                res.first_last_name_us_race_ethnicity_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def us_zip_race_ethnicity_batch(self, request: operations.UsZipRaceEthnicityBatchRequest) -> operations.UsZipRaceEthnicityBatchResponse:
        r"""[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api2/json/usZipRaceEthnicityBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UsZipRaceEthnicityBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchFirstLastNameUsRaceEthnicityOut])
                res.batch_first_last_name_us_race_ethnicity_out = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    


import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://openstates.org",
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
        
    
    
    
    def bill_detail_bills_jurisdiction_session_bill_id_get(self, request: operations.BillDetailBillsJurisdictionSessionBillIDGetRequest) -> operations.BillDetailBillsJurisdictionSessionBillIDGetResponse:
        r"""Bill Detail
        Obtain bill information based on (state, session, bill_id).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bills/{jurisdiction}/{session}/{bill_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BillDetailBillsJurisdictionSessionBillIDGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Bill])
                res.bill = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def bill_detail_by_id_bills_ocd_bill_openstates_bill_id_get(self, request: operations.BillDetailByIDBillsOcdBillOpenstatesBillIDGetRequest) -> operations.BillDetailByIDBillsOcdBillOpenstatesBillIDGetResponse:
        r"""Bill Detail By Id
        Obtain bill information by internal ID in the format ocd-bill/*uuid*. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bills/ocd-bill/{openstates_bill_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BillDetailByIDBillsOcdBillOpenstatesBillIDGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Bill])
                res.bill = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def bills_search_bills_get(self, request: operations.BillsSearchBillsGetRequest) -> operations.BillsSearchBillsGetResponse:
        r"""Bills Search
        Search for bills matching given criteria.
        
        Must either specify a jurisdiction or a full text query (q).  Additional parameters will
        futher restrict bills returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bills"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BillsSearchBillsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BillList])
                res.bill_list = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def committee_detail_committees_committee_id_get(self, request: operations.CommitteeDetailCommitteesCommitteeIDGetRequest) -> operations.CommitteeDetailCommitteesCommitteeIDGetResponse:
        r"""Committee Detail
        Get details on a single committee by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/committees/{committee_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CommitteeDetailCommitteesCommitteeIDGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Committee])
                res.committee = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def committee_list_committees_get(self, request: operations.CommitteeListCommitteesGetRequest) -> operations.CommitteeListCommitteesGetResponse:
        r"""Committee List
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/committees"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CommitteeListCommitteesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteeList])
                res.committee_list = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def jurisdiction_detail_jurisdictions_jurisdiction_id_get(self, request: operations.JurisdictionDetailJurisdictionsJurisdictionIDGetRequest) -> operations.JurisdictionDetailJurisdictionsJurisdictionIDGetResponse:
        r"""Jurisdiction Detail
        Get details on a single Jurisdiction (e.g. state or municipality). 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jurisdictions/{jurisdiction_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JurisdictionDetailJurisdictionsJurisdictionIDGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Jurisdiction])
                res.jurisdiction = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def jurisdiction_list_jurisdictions_get(self, request: operations.JurisdictionListJurisdictionsGetRequest) -> operations.JurisdictionListJurisdictionsGetResponse:
        r"""Jurisdiction List
        Get list of supported Jurisdictions, a Jurisdiction is a state or municipality.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/jurisdictions"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JurisdictionListJurisdictionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JurisdictionList])
                res.jurisdiction_list = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def people_geo_people_geo_get(self, request: operations.PeopleGeoPeopleGeoGetRequest) -> operations.PeopleGeoPeopleGeoGetResponse:
        r"""People Geo
        Get list of people currently representing a given location.
        
        **Note:** Currently limited to state legislators.  Governors & mayors are not included.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/people.geo"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PeopleGeoPeopleGeoGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonList])
                res.person_list = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def people_search_people_get(self, request: operations.PeopleSearchPeopleGetRequest) -> operations.PeopleSearchPeopleGetResponse:
        r"""People Search
        Get list of people matching selected criteria.
        
        Must provide either **jurisdiction**, **name**, or one or more **id** parameters.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/people"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PeopleSearchPeopleGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonList])
                res.person_list = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
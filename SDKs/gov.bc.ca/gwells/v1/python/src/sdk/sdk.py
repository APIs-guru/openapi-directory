

import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://apps.nrs.gov.bc.ca/gwells/api/v1/",
]


class SDK:
    

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
        
    
    
    
    def aquifer_codes_demand_list(self, request: operations.AquiferCodesDemandListRequest) -> operations.AquiferCodesDemandListResponse:
        r"""return a list of aquifer demand codes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aquifer-codes/demand/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AquiferCodesDemandListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AquiferCodesDemandList200ApplicationJSON])
                res.aquifer_codes_demand_list_200_application_json_object = out

        return res

    
    def aquifer_codes_materials_list(self, request: operations.AquiferCodesMaterialsListRequest) -> operations.AquiferCodesMaterialsListResponse:
        r"""return a list of aquifer material codes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aquifer-codes/materials/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AquiferCodesMaterialsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AquiferCodesMaterialsList200ApplicationJSON])
                res.aquifer_codes_materials_list_200_application_json_object = out

        return res

    
    def aquifer_codes_productivity_list(self, request: operations.AquiferCodesProductivityListRequest) -> operations.AquiferCodesProductivityListResponse:
        r"""return a list of aquifer productivity codes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aquifer-codes/productivity/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AquiferCodesProductivityListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AquiferCodesProductivityList200ApplicationJSON])
                res.aquifer_codes_productivity_list_200_application_json_object = out

        return res

    
    def aquifer_codes_quality_concerns_list(self, request: operations.AquiferCodesQualityConcernsListRequest) -> operations.AquiferCodesQualityConcernsListResponse:
        r"""return a list of quality concern codes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aquifer-codes/quality-concerns/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AquiferCodesQualityConcernsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AquiferCodesQualityConcernsList200ApplicationJSON])
                res.aquifer_codes_quality_concerns_list_200_application_json_object = out

        return res

    
    def aquifer_codes_subtypes_list(self, request: operations.AquiferCodesSubtypesListRequest) -> operations.AquiferCodesSubtypesListResponse:
        r"""return a list of aquifer subtype codes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aquifer-codes/subtypes/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AquiferCodesSubtypesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AquiferCodesSubtypesList200ApplicationJSON])
                res.aquifer_codes_subtypes_list_200_application_json_object = out

        return res

    
    def aquifer_codes_vulnerability_list(self, request: operations.AquiferCodesVulnerabilityListRequest) -> operations.AquiferCodesVulnerabilityListResponse:
        r"""return a list of aquifer vulnerability codes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aquifer-codes/vulnerability/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AquiferCodesVulnerabilityListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AquiferCodesVulnerabilityList200ApplicationJSON])
                res.aquifer_codes_vulnerability_list_200_application_json_object = out

        return res

    
    def aquifer_codes_water_use_list(self, request: operations.AquiferCodesWaterUseListRequest) -> operations.AquiferCodesWaterUseListResponse:
        r"""return a list of water use codes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aquifer-codes/water-use/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AquiferCodesWaterUseListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AquiferCodesWaterUseList200ApplicationJSON])
                res.aquifer_codes_water_use_list_200_application_json_object = out

        return res

    
    def aquifers_files_list(self, request: operations.AquifersFilesListRequest) -> operations.AquifersFilesListResponse:
        r"""list files found for the aquifer identified in the uri
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/aquifers/{aquifer_id}/files", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AquifersFilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AquifersFilesList200ApplicationJSON])
                res.aquifers_files_list_200_application_json_object = out

        return res

    
    def aquifers_list(self, request: operations.AquifersListRequest) -> operations.AquifersListResponse:
        r"""return a list of aquifers
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aquifers/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AquifersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AquifersList200ApplicationJSON])
                res.aquifers_list_200_application_json_object = out

        return res

    
    def aquifers_names_list(self, request: operations.AquifersNamesListRequest) -> operations.AquifersNamesListResponse:
        r"""List all aquifers in a simplified format
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aquifers/names/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AquifersNamesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AquiferSerializerBasic]])
                res.aquifer_serializer_basics = out

        return res

    
    def aquifers_read(self, request: operations.AquifersReadRequest) -> operations.AquifersReadResponse:
        r"""return details of aquifers
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/aquifers/{aquifer_id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AquifersReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Aquifer])
                res.aquifer = out

        return res

    
    def cities_drillers_list(self) -> operations.CitiesDrillersListResponse:
        r"""returns a list of cities with a qualified, registered operator (driller or installer)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cities/drillers/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CitiesDrillersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CityList]])
                res.city_lists = out

        return res

    
    def cities_installers_list(self) -> operations.CitiesInstallersListResponse:
        r"""returns a list of cities with a qualified, registered operator (driller or installer)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cities/installers/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CitiesInstallersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CityList]])
                res.city_lists = out

        return res

    
    def config_list(self) -> operations.ConfigListResponse:
        r"""serves general configuration
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/config"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfigListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def drillers_files_list(self, request: operations.DrillersFilesListRequest) -> operations.DrillersFilesListResponse:
        r"""list files found for the aquifer identified in the uri
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/drillers/{person_guid}/files/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DrillersFilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DrillersFilesList200ApplicationJSON])
                res.drillers_files_list_200_application_json_object = out

        return res

    
    def drillers_list(self, request: operations.DrillersListRequest) -> operations.DrillersListResponse:
        r"""Returns a list of all person records
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/drillers/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DrillersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PersonList]])
                res.person_lists = out

        return res

    
    def drillers_names_list(self, request: operations.DrillersNamesListRequest) -> operations.DrillersNamesListResponse:
        r"""Search for a person in the Register
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/drillers/names/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DrillersNamesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PersonName]])
                res.person_names = out

        return res

    
    def keycloak_list(self) -> operations.KeycloakListResponse:
        r"""serves keycloak config
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/keycloak"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.KeycloakListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def submissions_options_list(self) -> operations.SubmissionsOptionsListResponse:
        r"""Options required for submitting activity report forms
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/submissions/options/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SubmissionsOptionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def surveys_list(self) -> operations.SurveysListResponse:
        r"""returns a list of active surveys
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/surveys/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SurveysListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Survey]])
                res.surveys = out

        return res

    
    def wells_files_list(self, request: operations.WellsFilesListRequest) -> operations.WellsFilesListResponse:
        r"""list files found for the well identified in the uri
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/wells/{tag}/files", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WellsFilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.WellsFilesList200ApplicationJSON])
                res.wells_files_list_200_application_json_object = out

        return res

    
    def wells_list(self, request: operations.WellsListRequest) -> operations.WellsListResponse:
        r"""returns a list of wells
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/wells/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WellsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.WellsList200ApplicationJSON])
                res.wells_list_200_application_json_object = out

        return res

    
    def wells_read(self, request: operations.WellsReadRequest) -> operations.WellsReadResponse:
        r"""Return well detail.
        This view is open to all, and has no permissions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/wells/{well_tag_number}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WellsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WellDetail])
                res.well_detail = out

        return res

    
    def wells_tags_list(self, request: operations.WellsTagsListRequest) -> operations.WellsTagsListResponse:
        r"""seach for wells by tag or owner
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/wells/tags/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WellsTagsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.WellTagSearch]])
                res.well_tag_searches = out

        return res

    
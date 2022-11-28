import requests
from sdk.models import operations
from . import utils

class Name:
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

    
    def get_names_changes(self, request: operations.GetNamesChangesRequest) -> operations.GetNamesChangesResponse:
        r"""Search for names with metadata changes in a given period
        Search for information about geographical names which have changed most recently within a specified time window.  Changes may include status cupdates and metadata corrections.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/names/changes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNamesChangesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def get_names_decisions_recent(self, request: operations.GetNamesDecisionsRecentRequest) -> operations.GetNamesDecisionsRecentResponse:
        r"""Search for names affected by recent naming decision
        Search for information about geographical names affected by naming 'decisions' made by the BC Geographical Names Office (naming authority) within the last X days.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/names/decisions/recent"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNamesDecisionsRecentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def get_names_decisions_year(self, request: operations.GetNamesDecisionsYearRequest) -> operations.GetNamesDecisionsYearResponse:
        r"""Search for names affected by naming decisions in a given year
        Search for information about geographical names affected by naming 'decisions' made by the BC Geographical Names Office (naming authority) in a given year.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/names/decisions/year"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNamesDecisionsYearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def get_names_inside(self, request: operations.GetNamesInsideRequest) -> operations.GetNamesInsideResponse:
        r"""Search in a geographic area
        Search for information about geographical names that correspond to features within a geographic bounding box.  Various options and filter parameters are available to refine the search.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/names/inside"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNamesInsideResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def get_names_name_id_output_format_(self, request: operations.GetNamesNameIDOutputFormatRequest) -> operations.GetNamesNameIDOutputFormatResponse:
        r"""Get a name by its nameId
        Get information about the geographical name with the specified nameId.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/names/{nameId}.{outputFormat}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNamesNameIDOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_names_near(self, request: operations.GetNamesNearRequest) -> operations.GetNamesNearResponse:
        r"""Search near to a geographic point
        Search for information about geographical names that correspond to features within a geographic area defined by a centre point and a radius.  Various options and filter parameters are available to refine the search.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/names/near"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNamesNearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def get_names_not_official_search(self, request: operations.GetNamesNotOfficialSearchRequest) -> operations.GetNamesNotOfficialSearchResponse:
        r"""Search by name, limit to unofficial names only
        Search for information about unofficial geographical names by the text of the name itself.  Various options and filter parameters are available to refine the search.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/names/notOfficial/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNamesNotOfficialSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def get_names_official_search(self, request: operations.GetNamesOfficialSearchRequest) -> operations.GetNamesOfficialSearchResponse:
        r"""Search by name, limit to official names only
        Search for information about official geographical names by the text of the name itself.  Various options and filter parameters are available to refine the search.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/names/official/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNamesOfficialSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def get_names_search(self, request: operations.GetNamesSearchRequest) -> operations.GetNamesSearchResponse:
        r"""Search by name
        Search for information about geographical names by the text of the name itself.  The response will include both official and unofficial names.  Various options and filter parameters are available to refine the search.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/names/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNamesSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    
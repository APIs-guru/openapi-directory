import requests
from sdk.models import operations
from . import utils

class Parcels:
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

    
    def get_parcels_pids_site_id_output_format_(self, request: operations.GetParcelsPidsSiteIDOutputFormatRequest) -> operations.GetParcelsPidsSiteIDOutputFormatResponse:
        r"""Get a comma-separated string of all pids for a given site
        Represents all parcel identifiers associated with an individual site
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/parcels/pids/{siteID}.{outputFormat}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetParcelsPidsSiteIDOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
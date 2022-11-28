

import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"https://openbanking.org.uk",
	"https://openbanking.org.uk/open-banking/v3.1",
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
        
    
    
    
    def create_event_notification(self, request: operations.CreateEventNotificationRequest) -> operations.CreateEventNotificationResponse:
        r"""Send an event notification
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/event-notifications"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateEventNotificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass

        return res

    
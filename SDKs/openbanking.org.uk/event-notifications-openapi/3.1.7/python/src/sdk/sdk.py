import warnings
import requests
from sdk.models import operations
from . import utils


SERVERS = [
	"https://openbanking.org.uk",
	"https://openbanking.org.uk/open-banking/v3.1",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def create_event_notification(self, request: operations.CreateEventNotificationRequest) -> operations.CreateEventNotificationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/event-notifications"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateEventNotificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass

        return res

    
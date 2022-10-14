import warnings
import requests
from sdk.models import operations
from . import utils


SERVERS = [
	"https://virtserver.swaggerhub.com/mailboxvalidator/MailboxValidator-Disposable-Email-Checker/1.0.0",
	"https://api.mailboxvalidator.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def get_v1_email_disposable(self, request: operations.GetV1EmailDisposableRequest) -> operations.GetV1EmailDisposableResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/email/disposable"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV1EmailDisposableResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                res.get_v1_email_disposable_200_application_json_string = r.content

        return res

    
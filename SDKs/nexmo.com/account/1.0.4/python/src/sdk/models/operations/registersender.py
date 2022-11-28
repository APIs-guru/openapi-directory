from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


REGISTER_SENDER_SERVERS = [
	"https://rest.nexmo.com",
]


@dataclass
class RegisterSenderQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    api_secret: str = field(metadata={'query_param': { 'field_name': 'api_secret', 'style': 'form', 'explode': True }})
    

@dataclass
class RegisterSenderRequest:
    query_params: RegisterSenderQueryParams = field()
    request: shared.RegisterEmailRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class RegisterSenderResponse:
    content_type: str = field()
    status_code: int = field()
    register_email_response: Optional[shared.RegisterEmailResponse] = field(default=None)
    

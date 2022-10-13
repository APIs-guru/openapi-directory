from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CHANGE_ACCOUNT_SETTINGS_SERVERS = [
	"https://rest.nexmo.com",
]


@dataclass
class ChangeAccountSettingsQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    api_secret: str = field(default=None, metadata={'query_param': { 'field_name': 'api_secret', 'style': 'form', 'explode': True }})
    

@dataclass
class ChangeAccountSettingsRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ChangeAccountSettingsQueryParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class ChangeAccountSettingsResponses:
    raw_response: bytes = field(default=None)
    account_settings: Optional[shared.AccountSettings] = field(default=None)
    

@dataclass
class ChangeAccountSettingsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ChangeAccountSettingsResponses]] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CHANGE_ACCOUNT_SETTINGS_SERVERS = [
	"https://rest.nexmo.com",
]


@dataclass
class ChangeAccountSettingsQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    api_secret: str = field(metadata={'query_param': { 'field_name': 'api_secret', 'style': 'form', 'explode': True }})
    

@dataclass
class ChangeAccountSettingsRequest:
    query_params: ChangeAccountSettingsQueryParams = field()
    request: Optional[shared.AccountSettingsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ChangeAccountSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    account_settings: Optional[shared.AccountSettings] = field(default=None)
    

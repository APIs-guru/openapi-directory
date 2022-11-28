from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWebhooksV3AppIDSettingsGetAllPathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWebhooksV3AppIDSettingsGetAllSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetWebhooksV3AppIDSettingsGetAllRequest:
    path_params: GetWebhooksV3AppIDSettingsGetAllPathParams = field()
    security: GetWebhooksV3AppIDSettingsGetAllSecurity = field()
    

@dataclass
class GetWebhooksV3AppIDSettingsGetAllResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    settings_response: Optional[shared.SettingsResponse] = field(default=None)
    

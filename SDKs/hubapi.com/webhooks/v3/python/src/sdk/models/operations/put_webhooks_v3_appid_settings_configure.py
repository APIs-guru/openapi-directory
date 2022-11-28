from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutWebhooksV3AppIDSettingsConfigurePathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutWebhooksV3AppIDSettingsConfigureSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PutWebhooksV3AppIDSettingsConfigureRequest:
    path_params: PutWebhooksV3AppIDSettingsConfigurePathParams = field()
    request: shared.SettingsChangeRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PutWebhooksV3AppIDSettingsConfigureSecurity = field()
    

@dataclass
class PutWebhooksV3AppIDSettingsConfigureResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    settings_response: Optional[shared.SettingsResponse] = field(default=None)
    

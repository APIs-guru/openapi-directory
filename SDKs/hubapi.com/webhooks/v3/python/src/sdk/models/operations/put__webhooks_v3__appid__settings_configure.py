from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutWebhooksV3AppIDSettingsConfigurePathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutWebhooksV3AppIDSettingsConfigureSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PutWebhooksV3AppIDSettingsConfigureRequest:
    path_params: PutWebhooksV3AppIDSettingsConfigurePathParams = field(default=None)
    request: shared.SettingsChangeRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutWebhooksV3AppIDSettingsConfigureSecurity = field(default=None)
    

@dataclass
class PutWebhooksV3AppIDSettingsConfigureResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    settings_response: Optional[shared.SettingsResponse] = field(default=None)
    status_code: int = field(default=None)
    

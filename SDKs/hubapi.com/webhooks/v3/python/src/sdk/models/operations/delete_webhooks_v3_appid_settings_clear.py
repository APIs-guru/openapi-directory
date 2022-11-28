from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteWebhooksV3AppIDSettingsClearPathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWebhooksV3AppIDSettingsClearSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class DeleteWebhooksV3AppIDSettingsClearRequest:
    path_params: DeleteWebhooksV3AppIDSettingsClearPathParams = field()
    security: DeleteWebhooksV3AppIDSettingsClearSecurity = field()
    

@dataclass
class DeleteWebhooksV3AppIDSettingsClearResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

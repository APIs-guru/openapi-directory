from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetConsumerV1SettingsQueryParams:
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConsumerV1SettingsRequest:
    query_params: GetConsumerV1SettingsQueryParams = field(default=None)
    

@dataclass
class GetConsumerV1SettingsResponse:
    content_type: str = field(default=None)
    online_settings_view_model: Optional[shared.OnlineSettingsViewModel] = field(default=None)
    status_code: int = field(default=None)
    

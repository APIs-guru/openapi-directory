from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OriginPathParams:
    first_name: str = field(metadata={'path_param': { 'field_name': 'firstName', 'style': 'simple', 'explode': False }})
    last_name: str = field(metadata={'path_param': { 'field_name': 'lastName', 'style': 'simple', 'explode': False }})
    

@dataclass
class OriginSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class OriginRequest:
    path_params: OriginPathParams = field()
    security: OriginSecurity = field()
    

@dataclass
class OriginResponse:
    content_type: str = field()
    status_code: int = field()
    first_last_name_origined_out: Optional[shared.FirstLastNameOriginedOut] = field(default=None)
    

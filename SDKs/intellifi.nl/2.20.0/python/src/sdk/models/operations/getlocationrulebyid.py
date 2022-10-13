from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLocationRuleByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLocationRuleByIDRequest:
    path_params: GetLocationRuleByIDPathParams = field(default=None)
    

@dataclass
class GetLocationRuleByIDResponse:
    content_type: str = field(default=None)
    location_rule: Optional[shared.LocationRule] = field(default=None)
    status_code: int = field(default=None)
    

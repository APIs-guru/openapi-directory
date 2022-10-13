from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetGroupingOptionsPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGroupingOptionsRequest:
    path_params: GetGroupingOptionsPathParams = field(default=None)
    

@dataclass
class GetGroupingOptionsResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    special_view_option_dtos: Optional[List[shared.SpecialViewOptionDto]] = field(default=None)
    status_code: int = field(default=None)
    

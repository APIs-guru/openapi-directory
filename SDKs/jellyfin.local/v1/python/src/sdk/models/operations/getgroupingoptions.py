from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetGroupingOptionsPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGroupingOptionsRequest:
    path_params: GetGroupingOptionsPathParams = field()
    

@dataclass
class GetGroupingOptionsResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    special_view_option_dtos: Optional[List[shared.SpecialViewOptionDto]] = field(default=None)
    

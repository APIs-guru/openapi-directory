from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class NavigatePathParams:
    section_id: int = field(metadata={'path_param': { 'field_name': 'sectionId', 'style': 'simple', 'explode': False }})
    step: int = field(metadata={'path_param': { 'field_name': 'step', 'style': 'simple', 'explode': False }})
    

@dataclass
class NavigateRequest:
    path_params: NavigatePathParams = field()
    

@dataclass
class NavigateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    erskine_may_section_overview: Optional[shared.ErskineMaySectionOverview] = field(default=None)
    

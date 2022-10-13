from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class NavigatePathParams:
    section_id: int = field(default=None, metadata={'path_param': { 'field_name': 'sectionId', 'style': 'simple', 'explode': False }})
    step: int = field(default=None, metadata={'path_param': { 'field_name': 'step', 'style': 'simple', 'explode': False }})
    

@dataclass
class NavigateRequest:
    path_params: NavigatePathParams = field(default=None)
    

@dataclass
class NavigateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    erskine_may_section_overview: Optional[shared.ErskineMaySectionOverview] = field(default=None)
    status_code: int = field(default=None)
    

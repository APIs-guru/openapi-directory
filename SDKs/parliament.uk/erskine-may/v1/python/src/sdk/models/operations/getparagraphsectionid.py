from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetParagraphSectionIDPathParams:
    reference: str = field(default=None, metadata={'path_param': { 'field_name': 'reference', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetParagraphSectionIDRequest:
    path_params: GetParagraphSectionIDPathParams = field(default=None)
    

@dataclass
class GetParagraphSectionIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    erskine_may_section_overview: Optional[shared.ErskineMaySectionOverview] = field(default=None)
    status_code: int = field(default=None)
    

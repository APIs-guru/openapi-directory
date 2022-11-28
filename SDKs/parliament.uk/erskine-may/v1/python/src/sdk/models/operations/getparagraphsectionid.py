from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetParagraphSectionIDPathParams:
    reference: str = field(metadata={'path_param': { 'field_name': 'reference', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetParagraphSectionIDRequest:
    path_params: GetParagraphSectionIDPathParams = field()
    

@dataclass
class GetParagraphSectionIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    erskine_may_section_overview: Optional[shared.ErskineMaySectionOverview] = field(default=None)
    

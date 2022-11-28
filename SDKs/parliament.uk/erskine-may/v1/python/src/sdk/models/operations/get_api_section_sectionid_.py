from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPISectionSectionIDPathParams:
    section_id: int = field(metadata={'path_param': { 'field_name': 'sectionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPISectionSectionIDRequest:
    path_params: GetAPISectionSectionIDPathParams = field()
    

@dataclass
class GetAPISectionSectionIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    erskine_may_section_detail: Optional[shared.ErskineMaySectionDetail] = field(default=None)
    

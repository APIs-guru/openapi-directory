from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPISectionSectionIDPathParams:
    section_id: int = field(default=None, metadata={'path_param': { 'field_name': 'sectionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPISectionSectionIDRequest:
    path_params: GetAPISectionSectionIDPathParams = field(default=None)
    

@dataclass
class GetAPISectionSectionIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    erskine_may_section_detail: Optional[shared.ErskineMaySectionDetail] = field(default=None)
    status_code: int = field(default=None)
    

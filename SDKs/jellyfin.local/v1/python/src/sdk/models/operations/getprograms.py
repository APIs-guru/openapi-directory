from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProgramsRequests:
    get_programs_dto: Optional[shared.GetProgramsDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    get_programs_dto1: Optional[shared.GetProgramsDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    get_programs_dto2: Optional[shared.GetProgramsDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class GetProgramsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetProgramsRequest:
    security: GetProgramsSecurity = field()
    request: Optional[GetProgramsRequests] = field(default=None)
    

@dataclass
class GetProgramsResponse:
    content_type: str = field()
    status_code: int = field()
    base_item_dto_query_result: Optional[shared.BaseItemDtoQueryResult] = field(default=None)
    

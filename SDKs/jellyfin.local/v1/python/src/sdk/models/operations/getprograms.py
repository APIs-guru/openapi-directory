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
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetProgramsRequest:
    request: Optional[GetProgramsRequests] = field(default=None)
    security: GetProgramsSecurity = field(default=None)
    

@dataclass
class GetProgramsResponse:
    base_item_dto_query_result: Optional[shared.BaseItemDtoQueryResult] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

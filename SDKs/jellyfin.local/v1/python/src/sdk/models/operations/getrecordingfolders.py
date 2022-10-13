from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRecordingFoldersQueryParams:
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRecordingFoldersSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRecordingFoldersRequest:
    query_params: GetRecordingFoldersQueryParams = field(default=None)
    security: GetRecordingFoldersSecurity = field(default=None)
    

@dataclass
class GetRecordingFoldersResponse:
    base_item_dto_query_result: Optional[shared.BaseItemDtoQueryResult] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSuggestionsPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSuggestionsQueryParams:
    enable_total_record_count: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableTotalRecordCount', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    media_type: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'mediaType', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    type: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSuggestionsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSuggestionsRequest:
    path_params: GetSuggestionsPathParams = field(default=None)
    query_params: GetSuggestionsQueryParams = field(default=None)
    security: GetSuggestionsSecurity = field(default=None)
    

@dataclass
class GetSuggestionsResponse:
    base_item_dto_query_result: Optional[shared.BaseItemDtoQueryResult] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

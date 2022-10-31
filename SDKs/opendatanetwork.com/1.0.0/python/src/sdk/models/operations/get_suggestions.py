from dataclasses import dataclass, field
from typing import Enum,Optional

class GetSuggestionsTypeEnum(str, Enum):
    ENTITY = "entity"
    CATEGORY = "category"
    PUBLISHER = "publisher"
    DATASET = "dataset"
    QUESTION = "question"


@dataclass
class GetSuggestionsPathParams:
    type: GetSuggestionsTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSuggestionsQueryParams:
    app_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'app_token', 'style': 'form', 'explode': True }})
    limit: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    query: str = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    variable_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'variable_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSuggestionsHeaders:
    x_app_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-App-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSuggestionsRequest:
    path_params: GetSuggestionsPathParams = field(default=None)
    query_params: GetSuggestionsQueryParams = field(default=None)
    headers: GetSuggestionsHeaders = field(default=None)
    

@dataclass
class GetSuggestionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

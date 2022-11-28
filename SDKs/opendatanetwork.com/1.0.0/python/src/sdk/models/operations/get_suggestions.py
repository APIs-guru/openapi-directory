from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetSuggestionsTypeEnum(str, Enum):
    ENTITY = "entity"
    CATEGORY = "category"
    PUBLISHER = "publisher"
    DATASET = "dataset"
    QUESTION = "question"


@dataclass
class GetSuggestionsPathParams:
    type: GetSuggestionsTypeEnum = field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSuggestionsQueryParams:
    query: str = field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    app_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'app_token', 'style': 'form', 'explode': True }})
    limit: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    variable_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'variable_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSuggestionsHeaders:
    x_app_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-App-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSuggestionsRequest:
    headers: GetSuggestionsHeaders = field()
    path_params: GetSuggestionsPathParams = field()
    query_params: GetSuggestionsQueryParams = field()
    

@dataclass
class GetSuggestionsResponse:
    content_type: str = field()
    status_code: int = field()
    

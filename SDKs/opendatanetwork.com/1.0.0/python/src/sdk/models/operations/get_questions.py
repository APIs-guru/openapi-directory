from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetQuestionsQueryParams:
    query: str = field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    app_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'app_token', 'style': 'form', 'explode': True }})
    limit: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetQuestionsHeaders:
    x_app_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-App-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQuestionsRequest:
    headers: GetQuestionsHeaders = field()
    query_params: GetQuestionsQueryParams = field()
    

@dataclass
class GetQuestionsResponse:
    content_type: str = field()
    status_code: int = field()
    

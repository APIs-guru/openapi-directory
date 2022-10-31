from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetQuestionsQueryParams:
    app_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'app_token', 'style': 'form', 'explode': True }})
    limit: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    query: str = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class GetQuestionsHeaders:
    x_app_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-App-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQuestionsRequest:
    query_params: GetQuestionsQueryParams = field(default=None)
    headers: GetQuestionsHeaders = field(default=None)
    

@dataclass
class GetQuestionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

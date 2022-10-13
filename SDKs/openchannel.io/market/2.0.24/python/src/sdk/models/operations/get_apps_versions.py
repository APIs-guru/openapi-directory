from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAppsVersionsQueryParams:
    developer_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page_number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageNumber', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAppsVersionsRequest:
    query_params: GetAppsVersionsQueryParams = field(default=None)
    

@dataclass
class GetAppsVersionsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetDatasetsQueryParams:
    app_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'app_token', 'style': 'form', 'explode': True }})
    dataset_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dataset_id', 'style': 'form', 'explode': True }})
    entity_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'entity_id', 'style': 'form', 'explode': True }})
    limit: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDatasetsHeaders:
    x_app_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-App-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDatasetsRequest:
    query_params: GetDatasetsQueryParams = field(default=None)
    headers: GetDatasetsHeaders = field(default=None)
    

@dataclass
class GetDatasetsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

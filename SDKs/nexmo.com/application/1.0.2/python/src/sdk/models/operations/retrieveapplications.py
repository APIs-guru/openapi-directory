from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveApplicationsQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    api_secret: str = field(metadata={'query_param': { 'field_name': 'api_secret', 'style': 'form', 'explode': True }})
    page_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_index', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class RetrieveApplicationsRequest:
    query_params: RetrieveApplicationsQueryParams = field()
    

@dataclass
class RetrieveApplicationsResponse:
    content_type: str = field()
    status_code: int = field()
    applications: Optional[shared.Applications] = field(default=None)
    

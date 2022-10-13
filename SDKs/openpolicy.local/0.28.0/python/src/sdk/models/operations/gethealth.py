from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetHealthQueryParams:
    bundles: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'bundles', 'style': 'form', 'explode': True }})
    plugins: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'plugins', 'style': 'form', 'explode': True }})
    

@dataclass
class GetHealthRequest:
    query_params: GetHealthQueryParams = field(default=None)
    

@dataclass
class GetHealthResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSetupV1CompaniesRegionsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetupV1CompaniesRegionsRequest:
    query_params: GetSetupV1CompaniesRegionsQueryParams = field(default=None)
    

@dataclass
class GetSetupV1CompaniesRegionsResponse:
    content_type: str = field(default=None)
    region_list_view_model: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSetupV1LocationsQueryParams:
    deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'deleted', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    service_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'serviceId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetupV1LocationsRequest:
    query_params: GetSetupV1LocationsQueryParams = field(default=None)
    

@dataclass
class GetSetupV1LocationsResponse:
    content_type: str = field(default=None)
    location_list_view_model: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    

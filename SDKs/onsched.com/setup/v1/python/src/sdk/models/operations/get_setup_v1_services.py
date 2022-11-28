from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSetupV1ServicesQueryParams:
    deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'deleted', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    service_group_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'serviceGroupId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetupV1ServicesRequest:
    query_params: GetSetupV1ServicesQueryParams = field()
    

@dataclass
class GetSetupV1ServicesResponse:
    content_type: str = field()
    status_code: int = field()
    service_list_view_model: Optional[dict[str, Any]] = field(default=None)
    

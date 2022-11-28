from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class GetSetupV1ResourcesIDAllocationsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1ResourcesIDAllocationsQueryParams:
    end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetupV1ResourcesIDAllocationsRequest:
    path_params: GetSetupV1ResourcesIDAllocationsPathParams = field()
    query_params: GetSetupV1ResourcesIDAllocationsQueryParams = field()
    

@dataclass
class GetSetupV1ResourcesIDAllocationsResponse:
    content_type: str = field()
    status_code: int = field()
    resource_allocation_list_view_model: Optional[dict[str, Any]] = field(default=None)
    

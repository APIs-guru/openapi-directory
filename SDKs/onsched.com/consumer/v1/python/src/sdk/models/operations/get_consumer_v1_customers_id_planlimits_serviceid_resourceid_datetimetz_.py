from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTzPathParams:
    date_time_tz: datetime = field(default=None, metadata={'path_param': { 'field_name': 'dateTimeTz', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    resource_id: str = field(default=None, metadata={'path_param': { 'field_name': 'resourceId', 'style': 'simple', 'explode': False }})
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTzRequest:
    path_params: GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTzPathParams = field(default=None)
    

@dataclass
class GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTzResponse:
    content_type: str = field(default=None)
    plan_limit_list_view_model: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    

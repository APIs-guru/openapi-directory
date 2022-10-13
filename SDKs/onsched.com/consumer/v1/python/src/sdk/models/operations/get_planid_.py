from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPlanIDPathParams:
    plan_id: str = field(default=None, metadata={'path_param': { 'field_name': 'planId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPlanIDQueryParams:
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPlanIDRequest:
    path_params: GetPlanIDPathParams = field(default=None)
    query_params: GetPlanIDQueryParams = field(default=None)
    

@dataclass
class GetPlanIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

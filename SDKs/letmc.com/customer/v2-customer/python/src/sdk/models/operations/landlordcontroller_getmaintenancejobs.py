from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LandlordControllerGetMaintenanceJobsPathParams:
    short_name: str = field(default=None, metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class LandlordControllerGetMaintenanceJobsQueryParams:
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class LandlordControllerGetMaintenanceJobsRequest:
    path_params: LandlordControllerGetMaintenanceJobsPathParams = field(default=None)
    query_params: LandlordControllerGetMaintenanceJobsQueryParams = field(default=None)
    

@dataclass
class LandlordControllerGetMaintenanceJobsResponse:
    content_type: str = field(default=None)
    landlord_maintenance_model: Optional[shared.LandlordMaintenanceModel] = field(default=None)
    status_code: int = field(default=None)
    

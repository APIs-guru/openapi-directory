from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LandlordControllerGetMaintenanceJobsPathParams:
    short_name: str = field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class LandlordControllerGetMaintenanceJobsQueryParams:
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class LandlordControllerGetMaintenanceJobsRequest:
    path_params: LandlordControllerGetMaintenanceJobsPathParams = field()
    query_params: LandlordControllerGetMaintenanceJobsQueryParams = field()
    

@dataclass
class LandlordControllerGetMaintenanceJobsResponse:
    content_type: str = field()
    status_code: int = field()
    landlord_maintenance_model: Optional[shared.LandlordMaintenanceModel] = field(default=None)
    

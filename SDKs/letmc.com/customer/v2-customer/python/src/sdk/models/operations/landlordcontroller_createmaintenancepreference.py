from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LandlordControllerCreateMaintenancePreferencePathParams:
    short_name: str = field(default=None, metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class LandlordControllerCreateMaintenancePreferenceQueryParams:
    name: str = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    notes: str = field(default=None, metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    tenancy_id: str = field(default=None, metadata={'query_param': { 'field_name': 'tenancyID', 'style': 'form', 'explode': True }})
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class LandlordControllerCreateMaintenancePreferenceRequest:
    path_params: LandlordControllerCreateMaintenancePreferencePathParams = field(default=None)
    query_params: LandlordControllerCreateMaintenancePreferenceQueryParams = field(default=None)
    

@dataclass
class LandlordControllerCreateMaintenancePreferenceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    landlord_controller_create_maintenance_preference_200_application_json_string: Optional[str] = field(default=None)
    landlord_controller_create_maintenance_preference_200_text_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    

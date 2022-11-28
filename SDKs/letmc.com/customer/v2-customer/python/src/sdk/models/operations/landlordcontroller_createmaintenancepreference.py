from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LandlordControllerCreateMaintenancePreferencePathParams:
    short_name: str = field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class LandlordControllerCreateMaintenancePreferenceQueryParams:
    name: str = field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    notes: str = field(metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    tenancy_id: str = field(metadata={'query_param': { 'field_name': 'tenancyID', 'style': 'form', 'explode': True }})
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class LandlordControllerCreateMaintenancePreferenceRequest:
    path_params: LandlordControllerCreateMaintenancePreferencePathParams = field()
    query_params: LandlordControllerCreateMaintenancePreferenceQueryParams = field()
    

@dataclass
class LandlordControllerCreateMaintenancePreferenceResponse:
    content_type: str = field()
    status_code: int = field()
    landlord_controller_create_maintenance_preference_200_application_json_string: Optional[str] = field(default=None)
    landlord_controller_create_maintenance_preference_200_application_xml_string: Optional[str] = field(default=None)
    landlord_controller_create_maintenance_preference_200_text_json_string: Optional[str] = field(default=None)
    landlord_controller_create_maintenance_preference_200_text_xml_string: Optional[str] = field(default=None)
    

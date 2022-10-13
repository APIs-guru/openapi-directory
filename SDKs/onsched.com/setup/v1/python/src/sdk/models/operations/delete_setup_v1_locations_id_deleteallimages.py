from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteSetupV1LocationsIDDeleteallimagesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1LocationsIDDeleteallimagesQueryParams:
    uppercase: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'uppercase', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteSetupV1LocationsIDDeleteallimagesRequest:
    path_params: DeleteSetupV1LocationsIDDeleteallimagesPathParams = field(default=None)
    query_params: DeleteSetupV1LocationsIDDeleteallimagesQueryParams = field(default=None)
    

@dataclass
class DeleteSetupV1LocationsIDDeleteallimagesResponse:
    content_type: str = field(default=None)
    delete_setup_v1_locations_id_deleteallimages_200_application_json_boolean: Optional[bool] = field(default=None)
    status_code: int = field(default=None)
    

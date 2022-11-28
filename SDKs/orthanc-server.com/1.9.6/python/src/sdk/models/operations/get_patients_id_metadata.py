from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPatientsIDMetadataPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDMetadataQueryParams:
    expand: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPatientsIDMetadataRequest:
    path_params: GetPatientsIDMetadataPathParams = field()
    query_params: GetPatientsIDMetadataQueryParams = field()
    

@dataclass
class GetPatientsIDMetadataResponse:
    content_type: str = field()
    status_code: int = field()
    get_patients_id_metadata_200_application_json_any: Optional[Any] = field(default=None)
    

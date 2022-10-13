from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetStudiesIDMetadataPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudiesIDMetadataQueryParams:
    expand: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStudiesIDMetadataRequest:
    path_params: GetStudiesIDMetadataPathParams = field(default=None)
    query_params: GetStudiesIDMetadataQueryParams = field(default=None)
    

@dataclass
class GetStudiesIDMetadataResponse:
    content_type: str = field(default=None)
    get_studies_id_metadata_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    

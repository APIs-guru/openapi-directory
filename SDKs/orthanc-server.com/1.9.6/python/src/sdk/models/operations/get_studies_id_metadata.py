from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetStudiesIDMetadataPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudiesIDMetadataQueryParams:
    expand: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStudiesIDMetadataRequest:
    path_params: GetStudiesIDMetadataPathParams = field()
    query_params: GetStudiesIDMetadataQueryParams = field()
    

@dataclass
class GetStudiesIDMetadataResponse:
    content_type: str = field()
    status_code: int = field()
    get_studies_id_metadata_200_application_json_any: Optional[Any] = field(default=None)
    

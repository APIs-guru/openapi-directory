from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInstancesIDMetadataPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDMetadataQueryParams:
    expand: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDMetadataRequest:
    path_params: GetInstancesIDMetadataPathParams = field()
    query_params: GetInstancesIDMetadataQueryParams = field()
    

@dataclass
class GetInstancesIDMetadataResponse:
    content_type: str = field()
    status_code: int = field()
    get_instances_id_metadata_200_application_json_any: Optional[Any] = field(default=None)
    

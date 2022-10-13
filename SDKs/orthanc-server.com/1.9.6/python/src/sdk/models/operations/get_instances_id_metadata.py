from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInstancesIDMetadataPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDMetadataQueryParams:
    expand: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDMetadataRequest:
    path_params: GetInstancesIDMetadataPathParams = field(default=None)
    query_params: GetInstancesIDMetadataQueryParams = field(default=None)
    

@dataclass
class GetInstancesIDMetadataResponse:
    content_type: str = field(default=None)
    get_instances_id_metadata_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    

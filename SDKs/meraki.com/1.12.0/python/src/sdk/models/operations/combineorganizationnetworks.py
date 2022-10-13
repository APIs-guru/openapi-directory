from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class CombineOrganizationNetworksPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CombineOrganizationNetworksRequestBody:
    enrollment_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enrollmentString' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkIds' }})
    

@dataclass
class CombineOrganizationNetworksRequest:
    path_params: CombineOrganizationNetworksPathParams = field(default=None)
    request: CombineOrganizationNetworksRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CombineOrganizationNetworksResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    combine_organization_networks_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

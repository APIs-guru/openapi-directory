from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CombineOrganizationNetworksPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CombineOrganizationNetworksRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkIds') }})
    enrollment_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enrollmentString') }})
    

@dataclass
class CombineOrganizationNetworksRequest:
    path_params: CombineOrganizationNetworksPathParams = field()
    request: CombineOrganizationNetworksRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CombineOrganizationNetworksResponse:
    content_type: str = field()
    status_code: int = field()
    combine_organization_networks_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

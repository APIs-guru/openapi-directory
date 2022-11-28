from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateOrganizationNetworkPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class CreateOrganizationNetworkRequestBodyProductTypesEnum(str, Enum):
    WIRELESS = "wireless"
    APPLIANCE = "appliance"
    SWITCH = "switch"
    SYSTEMS_MANAGER = "systemsManager"
    CAMERA = "camera"
    CELLULAR_GATEWAY = "cellularGateway"
    SENSOR = "sensor"
    ENVIRONMENTAL = "environmental"


@dataclass_json
@dataclass
class CreateOrganizationNetworkRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    product_types: List[CreateOrganizationNetworkRequestBodyProductTypesEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productTypes') }})
    copy_from_network_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyFromNetworkId') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    

@dataclass
class CreateOrganizationNetworkRequest:
    path_params: CreateOrganizationNetworkPathParams = field()
    request: CreateOrganizationNetworkRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOrganizationNetworkResponse:
    content_type: str = field()
    status_code: int = field()
    create_organization_network_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

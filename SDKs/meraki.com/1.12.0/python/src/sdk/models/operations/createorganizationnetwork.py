from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateOrganizationNetworkPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
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
    copy_from_network_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyFromNetworkId' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    product_types: List[CreateOrganizationNetworkRequestBodyProductTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productTypes' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    

@dataclass
class CreateOrganizationNetworkRequest:
    path_params: CreateOrganizationNetworkPathParams = field(default=None)
    request: CreateOrganizationNetworkRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOrganizationNetworkResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_organization_network_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

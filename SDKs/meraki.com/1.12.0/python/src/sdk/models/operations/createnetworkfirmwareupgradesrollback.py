from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateNetworkFirmwareUpgradesRollbackPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum(str, Enum):
    WIRELESS = "wireless"
    SWITCH = "switch"
    APPLIANCE = "appliance"
    CAMERA = "camera"
    VMX_HOST = "vmxHost"
    CELLULAR_GATEWAY = "cellularGateway"

class CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum(str, Enum):
    PERFORMANCE = "performance"
    STABILITY = "stability"
    BROKE_OLD_FEATURES = "broke old features"
    UNIFYING_NETWORKS_VERSIONS = "unifying networks versions"
    TESTING = "testing"
    OTHER = "other"


@dataclass_json
@dataclass
class CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons:
    category: CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    comment: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    

@dataclass_json
@dataclass
class CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class CreateNetworkFirmwareUpgradesRollbackRequestBody:
    product: Optional[CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    reasons: List[CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasons' }})
    time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    to_version: Optional[CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toVersion' }})
    

@dataclass
class CreateNetworkFirmwareUpgradesRollbackRequest:
    path_params: CreateNetworkFirmwareUpgradesRollbackPathParams = field(default=None)
    request: CreateNetworkFirmwareUpgradesRollbackRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkFirmwareUpgradesRollbackResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_network_firmware_upgrades_rollback_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateNetworkFirmwareUpgradesRollbackPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
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
    category: CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    comment: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    

@dataclass_json
@dataclass
class CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion:
    r"""CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion
    Version to downgrade to (if the network has firmware flexibility)
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class CreateNetworkFirmwareUpgradesRollbackRequestBody:
    reasons: List[CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasons') }})
    product: Optional[CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    to_version: Optional[CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toVersion') }})
    

@dataclass
class CreateNetworkFirmwareUpgradesRollbackRequest:
    path_params: CreateNetworkFirmwareUpgradesRollbackPathParams = field()
    request: CreateNetworkFirmwareUpgradesRollbackRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkFirmwareUpgradesRollbackResponse:
    content_type: str = field()
    status_code: int = field()
    create_network_firmware_upgrades_rollback_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

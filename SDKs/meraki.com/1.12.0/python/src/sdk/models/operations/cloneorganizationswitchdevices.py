from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CloneOrganizationSwitchDevicesPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CloneOrganizationSwitchDevicesRequestBody:
    source_serial: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceSerial') }})
    target_serials: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetSerials') }})
    

@dataclass
class CloneOrganizationSwitchDevicesRequest:
    path_params: CloneOrganizationSwitchDevicesPathParams = field()
    request: CloneOrganizationSwitchDevicesRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CloneOrganizationSwitchDevicesResponse:
    content_type: str = field()
    status_code: int = field()
    clone_organization_switch_devices_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

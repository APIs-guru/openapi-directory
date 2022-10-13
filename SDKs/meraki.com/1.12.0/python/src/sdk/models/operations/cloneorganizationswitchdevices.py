from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class CloneOrganizationSwitchDevicesPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CloneOrganizationSwitchDevicesRequestBody:
    source_serial: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceSerial' }})
    target_serials: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetSerials' }})
    

@dataclass
class CloneOrganizationSwitchDevicesRequest:
    path_params: CloneOrganizationSwitchDevicesPathParams = field(default=None)
    request: CloneOrganizationSwitchDevicesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CloneOrganizationSwitchDevicesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    clone_organization_switch_devices_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

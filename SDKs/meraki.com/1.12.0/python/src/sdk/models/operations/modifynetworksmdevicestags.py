from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ModifyNetworkSmDevicesTagsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ModifyNetworkSmDevicesTagsRequestBody:
    tags: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    update_action: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateAction') }})
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    scope: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    serials: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serials') }})
    wifi_macs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifiMacs') }})
    

@dataclass
class ModifyNetworkSmDevicesTagsRequest:
    path_params: ModifyNetworkSmDevicesTagsPathParams = field()
    request: ModifyNetworkSmDevicesTagsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ModifyNetworkSmDevicesTagsResponse:
    content_type: str = field()
    status_code: int = field()
    modify_network_sm_devices_tags_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

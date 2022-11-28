from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkWirelessSsidSchedulesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidSchedulesRequestBodyRanges:
    end_day: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDay') }})
    end_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    start_day: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDay') }})
    start_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds:
    end: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidSchedulesRequestBody:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    ranges: Optional[List[UpdateNetworkWirelessSsidSchedulesRequestBodyRanges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ranges') }})
    ranges_in_seconds: Optional[List[UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rangesInSeconds') }})
    

@dataclass
class UpdateNetworkWirelessSsidSchedulesRequest:
    path_params: UpdateNetworkWirelessSsidSchedulesPathParams = field()
    request: Optional[UpdateNetworkWirelessSsidSchedulesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessSsidSchedulesResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_wireless_ssid_schedules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

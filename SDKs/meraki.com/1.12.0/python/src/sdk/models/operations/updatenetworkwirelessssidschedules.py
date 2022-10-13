from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkWirelessSsidSchedulesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(default=None, metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidSchedulesRequestBodyRanges:
    end_day: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDay' }})
    end_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    start_day: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDay' }})
    start_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds:
    end: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    start: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidSchedulesRequestBody:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    ranges: Optional[List[UpdateNetworkWirelessSsidSchedulesRequestBodyRanges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ranges' }})
    ranges_in_seconds: Optional[List[UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rangesInSeconds' }})
    

@dataclass
class UpdateNetworkWirelessSsidSchedulesRequest:
    path_params: UpdateNetworkWirelessSsidSchedulesPathParams = field(default=None)
    request: Optional[UpdateNetworkWirelessSsidSchedulesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessSsidSchedulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_wireless_ssid_schedules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import location
from . import geocoords


@dataclass_json
@dataclass
class SpotGetAntennaReportLocations:
    antenna_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'antenna_number' }})
    report_location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_location' }})
    report_location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_location_id' }})
    report_location_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_location_url' }})
    

@dataclass_json
@dataclass
class SpotGet:
    antenna_report_locations: Optional[List[SpotGetAntennaReportLocations]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'antenna_report_locations' }})
    config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    config_request: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config_request' }})
    geo_coords: Optional[geocoords.GeoCoords] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geo_coords' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_online: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_online' }})
    request_counter: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_counter' }})
    senses: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'senses' }})
    senses_request: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'senses_request' }})
    serial_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serial_number' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    time_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_created' }})
    time_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_updated' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

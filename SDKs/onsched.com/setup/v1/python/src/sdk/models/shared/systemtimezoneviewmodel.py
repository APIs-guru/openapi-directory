from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SystemTimezoneViewModel:
    base_utc_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseUtcOffset' }})
    daylight_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'daylightName' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    standard_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'standardName' }})
    supports_daylight_saving_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportsDaylightSavingTime' }})
    timezone_iana: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezoneIana' }})
    timezone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezoneId' }})
    

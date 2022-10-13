from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetglobaltimeQueryParams:
    license: str = field(default=None, metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    locale: str = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    

@dataclass
class GetglobaltimeRequest:
    query_params: GetglobaltimeQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class Getglobaltime200ApplicationJSON:
    clock_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClockTime' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Credits' }})
    current_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentDate' }})
    current_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentTime' }})
    day: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Day' }})
    hour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Hour' }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Locale' }})
    minute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Minute' }})
    month: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Month' }})
    month_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonthNumber' }})
    second: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Second' }})
    time_stamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeStamp' }})
    weekday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Weekday' }})
    year: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Year' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Zone' }})
    

@dataclass
class GetglobaltimeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    getglobaltime_200_application_json_object: Optional[Getglobaltime200ApplicationJSON] = field(default=None)
    

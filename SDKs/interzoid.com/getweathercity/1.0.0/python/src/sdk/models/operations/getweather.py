from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetweatherQueryParams:
    city: str = field(default=None, metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    license: str = field(default=None, metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    state: str = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class GetweatherRequest:
    query_params: GetweatherQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class Getweather200ApplicationJSON:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'City' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Credits' }})
    relative_humidity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RelativeHumidity' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    temp_c: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TempC' }})
    temp_f: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TempF' }})
    visibility_miles: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VisibilityMiles' }})
    weather: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Weather' }})
    wind_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindDir' }})
    wind_mph: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindMPH' }})
    

@dataclass
class GetweatherResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    getweather_200_application_json_object: Optional[Getweather200ApplicationJSON] = field(default=None)
    

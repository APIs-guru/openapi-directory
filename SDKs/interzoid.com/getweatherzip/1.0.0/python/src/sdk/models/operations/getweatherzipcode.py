from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetweatherzipcodeQueryParams:
    license: str = field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    zip: str = field(metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class Getweatherzipcode200ApplicationJSON:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('City') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credits') }})
    relative_humidity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelativeHumidity') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    temp_c: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TempC') }})
    temp_f: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TempF') }})
    visibility_miles: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VisibilityMiles') }})
    weather: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Weather') }})
    wind_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WindDir') }})
    wind_mph: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WindMPH') }})
    

@dataclass
class GetweatherzipcodeRequest:
    query_params: GetweatherzipcodeQueryParams = field()
    

@dataclass
class GetweatherzipcodeResponse:
    content_type: str = field()
    status_code: int = field()
    getweatherzipcode_200_application_json_object: Optional[Getweatherzipcode200ApplicationJSON] = field(default=None)
    

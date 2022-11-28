from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetzipcodeinfoQueryParams:
    license: str = field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    zip: str = field(metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class Getzipcodeinfo200ApplicationJSON:
    area_square_miles: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AreaSquareMiles') }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('City') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credits') }})
    elderly_household_percent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElderlyHouseholdPercent') }})
    farmer_household_percent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FarmerHouseholdPercent') }})
    income_percent100k: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncomePercent100k') }})
    income_percent200k: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncomePercent200k') }})
    income_percent50k: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncomePercent50k') }})
    latitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Latitude') }})
    longitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Longitude') }})
    married_household_percent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MarriedHouseholdPercent') }})
    population: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Population') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    zip_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ZipCode') }})
    

@dataclass
class GetzipcodeinfoRequest:
    query_params: GetzipcodeinfoQueryParams = field()
    

@dataclass
class GetzipcodeinfoResponse:
    content_type: str = field()
    status_code: int = field()
    getzipcodeinfo_200_application_json_object: Optional[Getzipcodeinfo200ApplicationJSON] = field(default=None)
    

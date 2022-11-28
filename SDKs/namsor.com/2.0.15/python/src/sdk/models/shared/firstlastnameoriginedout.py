from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FirstLastNameOriginedOut:
    r"""FirstLastNameOriginedOut
    Represents the output of inferring the LIKELY country of Origin from a personal name.
    """
    
    countries_origin_top: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countriesOriginTop') }})
    country_origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryOrigin') }})
    country_origin_alt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryOriginAlt') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    probability_alt_calibrated: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('probabilityAltCalibrated') }})
    probability_calibrated: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('probabilityCalibrated') }})
    region_origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionOrigin') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    sub_region_origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subRegionOrigin') }})
    top_region_origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topRegionOrigin') }})
    

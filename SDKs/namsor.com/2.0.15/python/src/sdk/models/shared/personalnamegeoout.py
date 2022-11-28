from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PersonalNameGeoOut:
    r"""PersonalNameGeoOut
    Classified geo names
    """
    
    countries_top: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countriesTop') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    country_alt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryAlt') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    probability_alt_calibrated: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('probabilityAltCalibrated') }})
    probability_calibrated: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('probabilityCalibrated') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    sub_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subRegion') }})
    top_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topRegion') }})
    

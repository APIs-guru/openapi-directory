from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FirstLastNameDiasporaedOut:
    r"""FirstLastNameDiasporaedOut
    Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.
    """
    
    country_iso2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryIso2') }})
    ethnicities_top: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ethnicitiesTop') }})
    ethnicity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ethnicity') }})
    ethnicity_alt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ethnicityAlt') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    lifted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifted') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    

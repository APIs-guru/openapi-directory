from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum(str, Enum):
    W_NL = "W_NL"
    HL = "HL"
    A = "A"
    B_NL = "B_NL"
    AI_AN = "AI_AN"
    PI = "PI"

class FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum(str, Enum):
    W_NL = "W_NL"
    HL = "HL"
    A = "A"
    B_NL = "B_NL"
    AI_AN = "AI_AN"
    PI = "PI"


@dataclass_json
@dataclass
class FirstLastNameUsRaceEthnicityOut:
    r"""FirstLastNameUsRaceEthnicityOut
    Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.
    """
    
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    probability_alt_calibrated: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('probabilityAltCalibrated') }})
    probability_calibrated: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('probabilityCalibrated') }})
    race_ethnicities_top: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('raceEthnicitiesTop') }})
    race_ethnicity: Optional[FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('raceEthnicity') }})
    race_ethnicity_alt: Optional[FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('raceEthnicityAlt') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    

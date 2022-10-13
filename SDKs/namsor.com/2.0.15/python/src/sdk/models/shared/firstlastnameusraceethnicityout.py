from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

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
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    probability_alt_calibrated: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'probabilityAltCalibrated' }})
    probability_calibrated: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'probabilityCalibrated' }})
    race_ethnicities_top: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'raceEthnicitiesTop' }})
    race_ethnicity: Optional[FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'raceEthnicity' }})
    race_ethnicity_alt: Optional[FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'raceEthnicityAlt' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchFirstLastNameUsRaceEthnicityOut:
    r"""BatchFirstLastNameUsRaceEthnicityOut
    Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.
    """
    
    personal_names: Optional[List[FirstLastNameUsRaceEthnicityOut]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalNames') }})
    

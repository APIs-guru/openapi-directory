from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EstimatedDiameterContainer:
    feet: Optional[EstimatedDiameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feet') }})
    kilometers: Optional[EstimatedDiameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kilometers') }})
    meters: Optional[EstimatedDiameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meters') }})
    miles: Optional[EstimatedDiameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('miles') }})
    

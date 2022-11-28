from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PatientRepresentation:
    care_contexts: List[CareContextRepresentation] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContexts') }})
    display: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display') }})
    reference_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceNumber') }})
    matched_by: Optional[List[IdentifierTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchedBy') }})
    

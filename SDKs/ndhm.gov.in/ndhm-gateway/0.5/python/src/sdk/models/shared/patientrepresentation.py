from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PatientRepresentation:
    display: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display') }})
    reference_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceNumber') }})
    care_contexts: Optional[List[CareContextRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContexts') }})
    matched_by: Optional[List[IdentifierTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchedBy') }})
    

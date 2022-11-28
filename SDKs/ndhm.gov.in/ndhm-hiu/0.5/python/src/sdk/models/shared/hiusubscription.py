from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HiuSubscription:
    hiu: OrganizationRepresentation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiu') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    patient: ConsentManagerPatientID = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    sources: List[HiuSubscriptionContext] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    

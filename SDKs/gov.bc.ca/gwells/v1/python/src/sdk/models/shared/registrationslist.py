from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegistrationsList:
    organization: OrganizationList = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity') }})
    activity_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity_description') }})
    applications: Optional[List[ApplicationList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applications') }})
    registration_no: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_no') }})
    

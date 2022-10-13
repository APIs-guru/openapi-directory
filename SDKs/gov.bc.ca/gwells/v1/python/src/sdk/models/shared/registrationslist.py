from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import applicationlist
from . import organizationlist


@dataclass_json
@dataclass
class RegistrationsList:
    activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activity' }})
    activity_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activity_description' }})
    applications: Optional[List[applicationlist.ApplicationList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applications' }})
    organization: organizationlist.OrganizationList = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization' }})
    registration_no: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registration_no' }})
    

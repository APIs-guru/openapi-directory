from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OrganizationNameList:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    org_guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('org_guid') }})
    org_verbose_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('org_verbose_name') }})
    

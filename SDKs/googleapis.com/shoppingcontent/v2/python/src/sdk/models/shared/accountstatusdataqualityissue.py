from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountStatusDataQualityIssue:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    displayed_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayedValue') }})
    example_items: Optional[List[AccountStatusExampleItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exampleItems') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_checked: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastChecked') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    num_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numItems') }})
    severity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    submitted_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submittedValue') }})
    

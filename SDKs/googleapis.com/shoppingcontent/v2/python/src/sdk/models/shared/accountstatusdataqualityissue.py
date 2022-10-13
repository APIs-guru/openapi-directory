from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountstatusexampleitem


@dataclass_json
@dataclass
class AccountStatusDataQualityIssue:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    displayed_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayedValue' }})
    example_items: Optional[List[accountstatusexampleitem.AccountStatusExampleItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exampleItems' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_checked: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastChecked' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    num_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numItems' }})
    severity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    submitted_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submittedValue' }})
    

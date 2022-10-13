from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccountStatusExampleItem:
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemId' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    submitted_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submittedValue' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    value_on_landing_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueOnLandingPage' }})
    

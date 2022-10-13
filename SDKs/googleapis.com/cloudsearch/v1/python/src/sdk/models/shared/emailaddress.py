from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EmailAddress:
    custom_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customType' }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddress' }})
    email_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailUrl' }})
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

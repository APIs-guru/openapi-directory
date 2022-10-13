from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Brand:
    application_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationTitle' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    org_internal_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orgInternalOnly' }})
    support_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportEmail' }})
    

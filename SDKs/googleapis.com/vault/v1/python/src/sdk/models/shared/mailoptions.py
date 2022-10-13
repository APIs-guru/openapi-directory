from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MailOptions:
    exclude_drafts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeDrafts' }})
    

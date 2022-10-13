from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import admin


@dataclass_json
@dataclass
class ListLocationAdminsResponse:
    admins: Optional[List[admin.Admin]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admins' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SasPortalCustomer:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sas_user_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sasUserIds' }})
    

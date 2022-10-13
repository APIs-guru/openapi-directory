from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrganizationNameList:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    org_guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'org_guid' }})
    org_verbose_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'org_verbose_name' }})
    

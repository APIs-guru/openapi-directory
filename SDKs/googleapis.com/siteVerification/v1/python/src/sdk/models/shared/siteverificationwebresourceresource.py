from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SiteVerificationWebResourceResourceSite:
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class SiteVerificationWebResourceResource:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    owners: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owners' }})
    site: Optional[SiteVerificationWebResourceResourceSite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site' }})
    

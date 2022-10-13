from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ospolicyresourcefile


@dataclass_json
@dataclass
class OsPolicyResourcePackageResourceMsi:
    properties: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    source: Optional[ospolicyresourcefile.OsPolicyResourceFile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    

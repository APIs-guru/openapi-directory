from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CollectionStatusItemLevelIssue:
    applicable_countries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicableCountries' }})
    attribute_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeName' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    documentation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation' }})
    resolution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    servability: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servability' }})
    

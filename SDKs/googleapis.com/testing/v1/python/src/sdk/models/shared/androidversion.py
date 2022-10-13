from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import distribution
from . import date


@dataclass_json
@dataclass
class AndroidVersion:
    api_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiLevel' }})
    code_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codeName' }})
    distribution: Optional[distribution.Distribution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distribution' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    release_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseDate' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    version_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionString' }})
    

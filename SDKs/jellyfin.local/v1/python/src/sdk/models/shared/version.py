from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Version:
    build: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Build' }, 'path_param': { 'field_name': 'Build' }})
    major: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Major' }, 'path_param': { 'field_name': 'Major' }})
    major_revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MajorRevision' }, 'path_param': { 'field_name': 'MajorRevision' }})
    minor: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Minor' }, 'path_param': { 'field_name': 'Minor' }})
    minor_revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinorRevision' }, 'path_param': { 'field_name': 'MinorRevision' }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Revision' }, 'path_param': { 'field_name': 'Revision' }})
    

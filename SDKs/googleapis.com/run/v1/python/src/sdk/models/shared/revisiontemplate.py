from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import objectmeta
from . import revisionspec


@dataclass_json
@dataclass
class RevisionTemplate:
    metadata: Optional[objectmeta.ObjectMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    spec: Optional[revisionspec.RevisionSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sourceobjectidentifier


@dataclass_json
@dataclass
class LookupStreamObjectRequest:
    source_object_identifier: Optional[sourceobjectidentifier.SourceObjectIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceObjectIdentifier' }})
    

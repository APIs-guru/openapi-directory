from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import countermetadata
from . import counterstructuredname


@dataclass_json
@dataclass
class CounterStructuredNameAndMetadata:
    metadata: Optional[countermetadata.CounterMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[counterstructuredname.CounterStructuredName] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

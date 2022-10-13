from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import observation


@dataclass_json
@dataclass
class GetInfoForObservedBeaconsRequest:
    namespaced_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespacedTypes' }})
    observations: Optional[List[observation.Observation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'observations' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import namespacedname


@dataclass_json
@dataclass
class NamespacedNames:
    namespaced_names: Optional[List[namespacedname.NamespacedName]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespacedNames' }})
    

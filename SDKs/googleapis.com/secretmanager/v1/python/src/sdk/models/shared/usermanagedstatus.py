from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import replicastatus


@dataclass_json
@dataclass
class UserManagedStatus:
    replicas: Optional[List[replicastatus.ReplicaStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicas' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MeshIstio:
    mesh_uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meshUid' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    service_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceNamespace' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MeshIstio:
    r"""MeshIstio
    Istio service scoped to an Istio mesh. Anthos clusters running ASM < 1.6.8 will have their services ingested as this type.
    """
    
    mesh_uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshUid') }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    service_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceNamespace') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KubernetesMetadata:
    kubernetes_api_server_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kubernetesApiServerVersion' }})
    memory_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryMb' }})
    node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeCount' }})
    node_provider_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeProviderId' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    vcpu_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcpuCount' }})
    

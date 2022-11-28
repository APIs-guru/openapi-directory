from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KubernetesMetadata:
    r"""KubernetesMetadata
    KubernetesMetadata provides informational metadata for Memberships representing Kubernetes clusters.
    """
    
    kubernetes_api_server_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetesApiServerVersion') }})
    memory_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryMb') }})
    node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeCount') }})
    node_provider_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeProviderId') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    vcpu_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcpuCount') }})
    

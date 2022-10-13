from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudServicebrokerV1beta1Binding:
    bind_resource: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bind_resource' }})
    binding_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'binding_id' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    deployment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentName' }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plan_id' }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_id' }})
    

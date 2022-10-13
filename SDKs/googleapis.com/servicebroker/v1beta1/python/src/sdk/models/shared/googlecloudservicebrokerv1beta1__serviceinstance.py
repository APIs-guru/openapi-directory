from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudServicebrokerV1beta1ServiceInstance:
    context: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    deployment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance_id' }})
    organization_guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization_guid' }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plan_id' }})
    previous_values: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_values' }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_id' }})
    space_guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'space_guid' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceInput:
    r"""ServiceInput
    Service acts as a top-level container that manages a set of Routes and Configurations which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership. Service acts only as an orchestrator of the underlying Routes and Configurations (much as a kubernetes Deployment orchestrates ReplicaSets). The Service's controller will track the statuses of its owned Configuration and Route, reflecting their statuses and conditions as its own. See also: https://github.com/knative/serving/blob/main/docs/spec/overview.md#service
    """
    
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiVersion') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    metadata: Optional[ObjectMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    spec: Optional[ServiceSpecInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    status: Optional[ServiceStatusInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class Service:
    r"""Service
    Service acts as a top-level container that manages a set of Routes and Configurations which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership. Service acts only as an orchestrator of the underlying Routes and Configurations (much as a kubernetes Deployment orchestrates ReplicaSets). The Service's controller will track the statuses of its owned Configuration and Route, reflecting their statuses and conditions as its own. See also: https://github.com/knative/serving/blob/main/docs/spec/overview.md#service
    """
    
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiVersion') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    metadata: Optional[ObjectMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    spec: Optional[ServiceSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    status: Optional[ServiceStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

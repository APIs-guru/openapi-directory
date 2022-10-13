from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import container
from . import localobjectreference
from . import volume


@dataclass_json
@dataclass
class RevisionSpec:
    container_concurrency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerConcurrency' }})
    containers: Optional[List[container.Container]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containers' }})
    enable_service_links: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableServiceLinks' }})
    image_pull_secrets: Optional[List[localobjectreference.LocalObjectReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imagePullSecrets' }})
    service_account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountName' }})
    timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutSeconds' }})
    volumes: Optional[List[volume.Volume]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    

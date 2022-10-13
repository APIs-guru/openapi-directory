from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ownerreference


@dataclass_json
@dataclass
class ObjectMeta:
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterName' }})
    creation_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTimestamp' }})
    deletion_grace_period_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletionGracePeriodSeconds' }})
    deletion_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletionTimestamp' }})
    finalizers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finalizers' }})
    generate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generateName' }})
    generation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generation' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespace' }})
    owner_references: Optional[List[ownerreference.OwnerReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerReferences' }})
    resource_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceVersion' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    

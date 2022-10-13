from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResourceOptions:
    connect_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectVersion' }})
    k8s_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'k8sVersion' }})
    v1beta1_crd: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v1beta1Crd' }})
    

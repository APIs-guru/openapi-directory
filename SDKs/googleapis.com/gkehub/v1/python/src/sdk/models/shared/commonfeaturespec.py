from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import multiclusteringressfeaturespec


@dataclass_json
@dataclass
class CommonFeatureSpec:
    appdevexperience: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appdevexperience' }})
    multiclusteringress: Optional[multiclusteringressfeaturespec.MultiClusterIngressFeatureSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiclusteringress' }})
    

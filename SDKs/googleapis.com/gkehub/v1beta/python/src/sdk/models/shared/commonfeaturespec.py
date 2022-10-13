from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import anthosobservabilityfeaturespec
from . import multiclusteringressfeaturespec


@dataclass_json
@dataclass
class CommonFeatureSpec:
    anthosobservability: Optional[anthosobservabilityfeaturespec.AnthosObservabilityFeatureSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anthosobservability' }})
    appdevexperience: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appdevexperience' }})
    multiclusteringress: Optional[multiclusteringressfeaturespec.MultiClusterIngressFeatureSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiclusteringress' }})
    

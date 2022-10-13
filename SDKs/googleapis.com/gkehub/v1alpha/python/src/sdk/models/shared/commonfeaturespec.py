from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import anthosobservabilityfeaturespec
from . import cloudauditloggingfeaturespec
from . import multiclusteringressfeaturespec
from . import featurespec


@dataclass_json
@dataclass
class CommonFeatureSpec:
    anthosobservability: Optional[anthosobservabilityfeaturespec.AnthosObservabilityFeatureSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anthosobservability' }})
    appdevexperience: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appdevexperience' }})
    cloudauditlogging: Optional[cloudauditloggingfeaturespec.CloudAuditLoggingFeatureSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudauditlogging' }})
    multiclusteringress: Optional[multiclusteringressfeaturespec.MultiClusterIngressFeatureSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiclusteringress' }})
    workloadcertificate: Optional[featurespec.FeatureSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workloadcertificate' }})
    

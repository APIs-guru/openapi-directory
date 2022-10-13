from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import anthosobservabilitymembershipspec


@dataclass_json
@dataclass
class AnthosObservabilityFeatureSpec:
    default_membership_spec: Optional[anthosobservabilitymembershipspec.AnthosObservabilityMembershipSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultMembershipSpec' }})
    

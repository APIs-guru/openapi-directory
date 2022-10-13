from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import anthosvmsubfeaturespec


@dataclass_json
@dataclass
class AnthosVMMembershipSpec:
    subfeatures_spec: Optional[List[anthosvmsubfeaturespec.AnthosVMSubFeatureSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subfeaturesSpec' }})
    

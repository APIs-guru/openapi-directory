from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import extractionrules


@dataclass_json
@dataclass
class EgressControlConfig:
    backends: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backends' }})
    extraction_rules: Optional[extractionrules.ExtractionRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extractionRules' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import extractionrule


@dataclass_json
@dataclass
class ExtractionRules:
    extraction_rule: Optional[List[extractionrule.ExtractionRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extractionRule' }})
    

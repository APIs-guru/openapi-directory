from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Rule:
    asset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    targeting_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingTemplateId' }})
    

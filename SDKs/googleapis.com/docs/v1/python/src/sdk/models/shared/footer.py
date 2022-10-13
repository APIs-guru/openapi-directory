from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import structuralelement


@dataclass_json
@dataclass
class Footer:
    content: Optional[List[structuralelement.StructuralElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    footer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'footerId' }})
    

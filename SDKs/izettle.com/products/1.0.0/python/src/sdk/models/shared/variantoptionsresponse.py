from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import option


@dataclass_json
@dataclass
class VariantOptionsResponse:
    options: Optional[List[option.Option]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    

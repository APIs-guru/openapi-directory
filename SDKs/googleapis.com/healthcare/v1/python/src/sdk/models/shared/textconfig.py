from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import infotypetransformation


@dataclass_json
@dataclass
class TextConfig:
    transformations: Optional[List[infotypetransformation.InfoTypeTransformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transformations' }})
    

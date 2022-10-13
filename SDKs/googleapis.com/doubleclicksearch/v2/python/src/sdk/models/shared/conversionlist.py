from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import conversion


@dataclass_json
@dataclass
class ConversionList:
    conversion: Optional[List[conversion.Conversion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversion' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    

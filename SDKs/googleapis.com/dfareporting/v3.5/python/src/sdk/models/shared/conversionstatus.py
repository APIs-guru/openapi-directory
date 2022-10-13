from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import conversion
from . import conversionerror


@dataclass_json
@dataclass
class ConversionStatus:
    conversion: Optional[conversion.Conversion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversion' }})
    errors: Optional[List[conversionerror.ConversionError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    

from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json
from . import obreaddata1


@dataclass_json
@dataclass
class ObReadConsent1:
    data: obreaddata1.ObReadData1 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    risk: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Risk' }})
    

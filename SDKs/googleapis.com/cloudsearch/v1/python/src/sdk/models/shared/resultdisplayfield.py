from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import namedproperty


@dataclass_json
@dataclass
class ResultDisplayField:
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    operator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatorName' }})
    property: Optional[namedproperty.NamedProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'property' }})
    

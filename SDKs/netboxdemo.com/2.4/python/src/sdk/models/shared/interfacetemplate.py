from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import nesteddevicetype


@dataclass_json
@dataclass
class InterfaceTemplateFormFactorFormFactor:
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class InterfaceTemplate:
    device_type: nesteddevicetype.NestedDeviceType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_type' }})
    form_factor: Optional[InterfaceTemplateFormFactorFormFactor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form_factor' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    mgmt_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mgmt_only' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

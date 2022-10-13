from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customclass


@dataclass_json
@dataclass
class CreateCustomClassRequest:
    custom_class: Optional[customclass.CustomClass] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customClass' }})
    custom_class_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customClassId' }})
    

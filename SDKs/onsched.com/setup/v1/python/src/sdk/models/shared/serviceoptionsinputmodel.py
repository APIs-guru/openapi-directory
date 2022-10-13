from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ServiceOptionsInputModel:
    consumer_padding: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerPadding' }})
    default_service: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultService' }})
    duration_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationInterval' }})
    duration_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationMax' }})
    duration_min: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationMin' }})
    duration_select: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationSelect' }})
    padding: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'padding' }})
    

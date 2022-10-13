from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Audio:
    high_boost: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'highBoost' }})
    low_boost: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lowBoost' }})
    lufs: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lufs' }})
    

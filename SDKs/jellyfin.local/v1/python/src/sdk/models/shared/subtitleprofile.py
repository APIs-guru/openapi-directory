from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import subtitledeliverymethod_enum


@dataclass_json
@dataclass
class SubtitleProfile:
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Container' }})
    didl_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DidlMode' }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Format' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Language' }})
    method: Optional[subtitledeliverymethod_enum.SubtitleDeliveryMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Method' }})
    

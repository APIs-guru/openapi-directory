from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SuffixOptionEnum(str, Enum):
    OPTION_UNSPECIFIED = "OPTION_UNSPECIFIED"
    UNGUESSABLE = "UNGUESSABLE"
    SHORT = "SHORT"
    CUSTOM = "CUSTOM"


@dataclass_json
@dataclass
class Suffix:
    custom_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customSuffix' }})
    option: Optional[SuffixOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'option' }})
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SourceSourceTypeEnum(str, Enum):
    SOURCE_TYPE_UNSPECIFIED = "SOURCE_TYPE_UNSPECIFIED"
    CONFIG_VARIABLE = "CONFIG_VARIABLE"


@dataclass_json
@dataclass
class Source:
    field_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldId' }})
    source_type: Optional[SourceSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceType' }})
    

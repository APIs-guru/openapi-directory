from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ApplicationReferenceTypeEnum(str, Enum):
    UNSPECIFIED_REFERENCE_TYPE = "UNSPECIFIED_REFERENCE_TYPE"
    LINK = "LINK"
    DISCUSS = "DISCUSS"


@dataclass_json
@dataclass
class ApplicationReference:
    type: Optional[ApplicationReferenceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

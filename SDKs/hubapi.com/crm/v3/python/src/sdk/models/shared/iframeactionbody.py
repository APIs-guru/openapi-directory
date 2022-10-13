from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class IFrameActionBodyTypeEnum(str, Enum):
    IFRAME = "IFRAME"


@dataclass_json
@dataclass
class IFrameActionBody:
    height: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    property_names_included: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertyNamesIncluded' }})
    type: IFrameActionBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    width: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    

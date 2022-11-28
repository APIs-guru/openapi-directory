from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class IFrameActionBodyTypeEnum(str, Enum):
    IFRAME = "IFRAME"


@dataclass_json
@dataclass
class IFrameActionBody:
    height: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    property_names_included: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyNamesIncluded') }})
    type: IFrameActionBodyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    

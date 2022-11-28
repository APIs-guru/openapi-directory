from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SourceSourceTypeEnum(str, Enum):
    SOURCE_TYPE_UNSPECIFIED = "SOURCE_TYPE_UNSPECIFIED"
    CONFIG_VARIABLE = "CONFIG_VARIABLE"


@dataclass_json
@dataclass
class Source:
    r"""Source
    Source to extract the backend from.
    """
    
    field_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldId') }})
    source_type: Optional[SourceSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceType') }})
    

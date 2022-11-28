from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DimensionValueMatchTypeEnum(str, Enum):
    EXACT = "EXACT"
    BEGINS_WITH = "BEGINS_WITH"
    CONTAINS = "CONTAINS"
    WILDCARD_EXPRESSION = "WILDCARD_EXPRESSION"


@dataclass_json
@dataclass
class DimensionValue:
    r"""DimensionValue
    Represents a DimensionValue resource.
    """
    
    dimension_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionName') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    match_type: Optional[DimensionValueMatchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchType') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

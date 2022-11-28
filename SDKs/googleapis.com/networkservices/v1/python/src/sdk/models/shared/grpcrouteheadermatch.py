from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GrpcRouteHeaderMatchTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    EXACT = "EXACT"
    REGULAR_EXPRESSION = "REGULAR_EXPRESSION"


@dataclass_json
@dataclass
class GrpcRouteHeaderMatch:
    r"""GrpcRouteHeaderMatch
    A match against a collection of headers.
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    type: Optional[GrpcRouteHeaderMatchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class NameAndKindKindEnum(str, Enum):
    INVALID = "INVALID"
    SUM = "SUM"
    MAX = "MAX"
    MIN = "MIN"
    MEAN = "MEAN"
    OR = "OR"
    AND = "AND"
    SET = "SET"
    DISTRIBUTION = "DISTRIBUTION"
    LATEST_VALUE = "LATEST_VALUE"


@dataclass_json
@dataclass
class NameAndKind:
    kind: Optional[NameAndKindKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

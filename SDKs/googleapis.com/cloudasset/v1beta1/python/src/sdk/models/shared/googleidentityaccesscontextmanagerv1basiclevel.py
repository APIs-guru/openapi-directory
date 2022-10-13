from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleidentityaccesscontextmanagerv1condition

class GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunctionEnum(str, Enum):
    AND = "AND"
    OR = "OR"


@dataclass_json
@dataclass
class GoogleIdentityAccesscontextmanagerV1BasicLevel:
    combining_function: Optional[GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunctionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'combiningFunction' }})
    conditions: Optional[List[googleidentityaccesscontextmanagerv1condition.GoogleIdentityAccesscontextmanagerV1Condition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    

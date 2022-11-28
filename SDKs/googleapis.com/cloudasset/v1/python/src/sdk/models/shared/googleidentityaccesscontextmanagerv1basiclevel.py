from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunctionEnum(str, Enum):
    AND = "AND"
    OR = "OR"


@dataclass_json
@dataclass
class GoogleIdentityAccesscontextmanagerV1BasicLevel:
    r"""GoogleIdentityAccesscontextmanagerV1BasicLevel
    `BasicLevel` is an `AccessLevel` using a set of recommended features.
    """
    
    combining_function: Optional[GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunctionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combiningFunction') }})
    conditions: Optional[List[GoogleIdentityAccesscontextmanagerV1Condition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    

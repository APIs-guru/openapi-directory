from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TextConfigProfileTypeEnum(str, Enum):
    PROFILE_TYPE_UNSPECIFIED = "PROFILE_TYPE_UNSPECIFIED"
    EMPTY = "EMPTY"
    BASIC = "BASIC"


@dataclass_json
@dataclass
class TextConfig:
    r"""TextConfig
    Configures how to transform sensitive text `InfoTypes`.
    """
    
    additional_transformations: Optional[List[InfoTypeTransformation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalTransformations') }})
    exclude_info_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeInfoTypes') }})
    profile_type: Optional[TextConfigProfileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileType') }})
    transformations: Optional[List[InfoTypeTransformation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformations') }})
    

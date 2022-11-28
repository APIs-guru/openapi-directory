from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BackendRulePathTranslationEnum(str, Enum):
    PATH_TRANSLATION_UNSPECIFIED = "PATH_TRANSLATION_UNSPECIFIED"
    CONSTANT_ADDRESS = "CONSTANT_ADDRESS"
    APPEND_PATH_TO_ADDRESS = "APPEND_PATH_TO_ADDRESS"


@dataclass_json
@dataclass
class BackendRule:
    r"""BackendRule
    A backend rule provides configuration for an individual API element.
    """
    
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    deadline: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deadline') }})
    disable_auth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableAuth') }})
    jwt_audience: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jwtAudience') }})
    operation_deadline: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationDeadline') }})
    path_translation: Optional[BackendRulePathTranslationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathTranslation') }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    

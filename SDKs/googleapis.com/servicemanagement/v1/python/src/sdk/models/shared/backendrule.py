from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class BackendRulePathTranslationEnum(str, Enum):
    PATH_TRANSLATION_UNSPECIFIED = "PATH_TRANSLATION_UNSPECIFIED"
    CONSTANT_ADDRESS = "CONSTANT_ADDRESS"
    APPEND_PATH_TO_ADDRESS = "APPEND_PATH_TO_ADDRESS"


@dataclass_json
@dataclass
class BackendRule:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    deadline: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deadline' }})
    disable_auth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableAuth' }})
    jwt_audience: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jwtAudience' }})
    operation_deadline: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationDeadline' }})
    path_translation: Optional[BackendRulePathTranslationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pathTranslation' }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    

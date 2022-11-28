from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ServiceMeshAnalysisMessageBaseLevelEnum(str, Enum):
    LEVEL_UNSPECIFIED = "LEVEL_UNSPECIFIED"
    ERROR = "ERROR"
    WARNING = "WARNING"
    INFO = "INFO"


@dataclass_json
@dataclass
class ServiceMeshAnalysisMessageBase:
    r"""ServiceMeshAnalysisMessageBase
    AnalysisMessageBase describes some common information that is needed for all messages.
    """
    
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentationUrl') }})
    level: Optional[ServiceMeshAnalysisMessageBaseLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    type: Optional[ServiceMeshType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

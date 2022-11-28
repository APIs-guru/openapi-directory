from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SDKInfoLanguageEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    JAVA = "JAVA"
    PYTHON = "PYTHON"
    GO = "GO"


@dataclass_json
@dataclass
class SDKInfo:
    r"""SDKInfo
    SDK Information.
    """
    
    language: Optional[SDKInfoLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

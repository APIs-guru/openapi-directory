from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SdkInfoLanguageEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    JAVA = "JAVA"
    PYTHON = "PYTHON"
    GO = "GO"


@dataclass_json
@dataclass
class SdkInfo:
    language: Optional[SdkInfoLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

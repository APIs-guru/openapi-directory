from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MailerConsoleExporterConfigTypeEnum(str, Enum):
    GENERIC = "generic"


@dataclass_json
@dataclass
class MailerConsoleExporterConfig:
    type: Optional[MailerConsoleExporterConfigTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MailerConsoleExporterConfigTypeEnum(str, Enum):
    GENERIC = "generic"


@dataclass_json
@dataclass
class MailerConsoleExporterConfig:
    type: Optional[MailerConsoleExporterConfigTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MailerGenericExporterConfigTypeEnum(str, Enum):
    GENERIC = "generic"


@dataclass_json
@dataclass
class MailerGenericExporterConfig:
    type: MailerGenericExporterConfigTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    to: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

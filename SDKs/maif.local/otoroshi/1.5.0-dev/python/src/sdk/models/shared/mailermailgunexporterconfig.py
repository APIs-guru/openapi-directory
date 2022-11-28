from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MailerMailgunExporterConfigTypeEnum(str, Enum):
    MAILGUN = "mailgun"


@dataclass_json
@dataclass
class MailerMailgunExporterConfig:
    type: MailerMailgunExporterConfigTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    eu: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eu') }})
    to: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

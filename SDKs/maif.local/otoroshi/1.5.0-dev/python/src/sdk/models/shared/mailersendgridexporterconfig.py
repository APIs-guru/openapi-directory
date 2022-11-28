from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MailerSendgridExporterConfigTypeEnum(str, Enum):
    SENDGRID = "sendgrid"


@dataclass_json
@dataclass
class MailerSendgridExporterConfig:
    type: MailerSendgridExporterConfigTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    api_key_public: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKeyPublic') }})
    to: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

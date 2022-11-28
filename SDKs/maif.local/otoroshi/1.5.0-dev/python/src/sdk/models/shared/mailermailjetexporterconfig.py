from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MailerMailjetExporterConfigTypeEnum(str, Enum):
    MAILJET = "mailjet"


@dataclass_json
@dataclass
class MailerMailjetExporterConfig:
    type: MailerMailjetExporterConfigTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    api_key_private: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKeyPrivate') }})
    api_key_public: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKeyPublic') }})
    to: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

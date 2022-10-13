from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class MailerSendgridExporterConfigTypeEnum(str, Enum):
    SENDGRID = "sendgrid"


@dataclass_json
@dataclass
class MailerSendgridExporterConfig:
    api_key_public: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKeyPublic' }})
    to: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    type: MailerSendgridExporterConfigTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

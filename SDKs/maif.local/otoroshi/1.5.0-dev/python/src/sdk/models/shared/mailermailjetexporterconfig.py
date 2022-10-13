from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class MailerMailjetExporterConfigTypeEnum(str, Enum):
    MAILJET = "mailjet"


@dataclass_json
@dataclass
class MailerMailjetExporterConfig:
    api_key_private: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKeyPrivate' }})
    api_key_public: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKeyPublic' }})
    to: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    type: MailerMailjetExporterConfigTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

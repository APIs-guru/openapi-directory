from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class MailerMailgunExporterConfigTypeEnum(str, Enum):
    MAILGUN = "mailgun"


@dataclass_json
@dataclass
class MailerMailgunExporterConfig:
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKey' }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    eu: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eu' }})
    to: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    type: MailerMailgunExporterConfigTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

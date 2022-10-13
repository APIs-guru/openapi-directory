from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class MailerGenericExporterConfigTypeEnum(str, Enum):
    GENERIC = "generic"


@dataclass_json
@dataclass
class MailerGenericExporterConfig:
    headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    to: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    type: MailerGenericExporterConfigTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

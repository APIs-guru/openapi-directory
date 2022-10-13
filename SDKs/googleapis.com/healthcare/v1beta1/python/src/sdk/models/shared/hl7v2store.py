from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import notificationconfig
from . import hl7v2notificationconfig
from . import parserconfig


@dataclass_json
@dataclass
class Hl7V2Store:
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notification_config: Optional[notificationconfig.NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationConfig' }})
    notification_configs: Optional[List[hl7v2notificationconfig.Hl7V2NotificationConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationConfigs' }})
    parser_config: Optional[parserconfig.ParserConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parserConfig' }})
    reject_duplicate_message: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectDuplicateMessage' }})
    

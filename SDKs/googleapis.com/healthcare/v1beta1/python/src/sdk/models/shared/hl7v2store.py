from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Hl7V2Store:
    r"""Hl7V2Store
    Represents an HL7v2 store.
    """
    
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notification_config: Optional[NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationConfig') }})
    notification_configs: Optional[List[Hl7V2NotificationConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationConfigs') }})
    parser_config: Optional[ParserConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parserConfig') }})
    reject_duplicate_message: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectDuplicateMessage') }})
    

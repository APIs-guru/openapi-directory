from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import user

class SlashCommandMetadataTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    ADD = "ADD"
    INVOKE = "INVOKE"


@dataclass_json
@dataclass
class SlashCommandMetadata:
    bot: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bot' }})
    command_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commandId' }})
    command_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commandName' }})
    triggers_dialog: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggersDialog' }})
    type: Optional[SlashCommandMetadataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

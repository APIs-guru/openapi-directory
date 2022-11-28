from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SlashCommand:
    r"""SlashCommand
    A [slash command](https://developers.google.com/chat/how-tos/slash-commands) in Google Chat.
    """
    
    command_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commandId') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MoveFolderRequest:
    r"""MoveFolderRequest
    The MoveFolder request message.
    """
    
    destination_parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationParent') }})
    

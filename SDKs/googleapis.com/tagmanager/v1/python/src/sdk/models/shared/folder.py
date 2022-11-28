from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Folder:
    r"""Folder
    Represents a Google Tag Manager Folder.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    container_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerId') }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folderId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

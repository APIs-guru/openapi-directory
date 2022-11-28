from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ClientInfo:
    r"""ClientInfo
    Information about the client
    """
    
    manufacturer: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    model: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    firmware: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firmware') }})
    platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    

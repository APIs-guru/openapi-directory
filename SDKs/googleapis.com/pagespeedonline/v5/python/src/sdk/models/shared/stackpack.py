from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StackPack:
    r"""StackPack
    Message containing Stack Pack information.
    """
    
    descriptions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('descriptions') }})
    icon_data_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconDataURL') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

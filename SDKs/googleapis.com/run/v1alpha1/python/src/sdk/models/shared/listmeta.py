from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListMeta:
    r"""ListMeta
    ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
    """
    
    continue_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continue') }})
    resource_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceVersion') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    

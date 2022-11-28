from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContainerVersion:
    r"""ContainerVersion
    Represents a Google Tag Manager Container Version.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    container: Optional[Container] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    container_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerId') }})
    container_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerVersionId') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    folder: Optional[List[Folder]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folder') }})
    macro: Optional[List[Macro]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('macro') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    rule: Optional[List[Rule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    tag: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    trigger: Optional[List[Trigger]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger') }})
    variable: Optional[List[Variable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variable') }})
    

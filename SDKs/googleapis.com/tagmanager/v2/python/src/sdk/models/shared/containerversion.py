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
    built_in_variable: Optional[List[BuiltInVariable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builtInVariable') }})
    client: Optional[List[Client]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    container: Optional[Container] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    container_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerId') }})
    container_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerVersionId') }})
    custom_template: Optional[List[CustomTemplate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customTemplate') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    folder: Optional[List[Folder]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folder') }})
    gtag_config: Optional[List[GtagConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gtagConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    tag: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    tag_manager_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagManagerUrl') }})
    trigger: Optional[List[Trigger]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger') }})
    variable: Optional[List[Variable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variable') }})
    zone: Optional[List[Zone]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    

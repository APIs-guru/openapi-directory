from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Manifest:
    config: Optional[ConfigFile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    expanded_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expandedConfig') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    imports: Optional[List[ImportFile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imports') }})
    insert_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertTime') }})
    layout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layout') }})
    manifest_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manifestSizeBytes') }})
    manifest_size_limit_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manifestSizeLimitBytes') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    

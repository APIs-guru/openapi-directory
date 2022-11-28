from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PatchInstanceFilter:
    r"""PatchInstanceFilter
    A filter to target VM instances for patching. The targeted VMs must meet all criteria specified. So if both labels and zones are specified, the patch job targets only VMs with those labels and in those zones.
    """
    
    all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('all') }})
    group_labels: Optional[List[PatchInstanceFilterGroupLabel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupLabels') }})
    instance_name_prefixes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceNamePrefixes') }})
    instances: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zones') }})
    

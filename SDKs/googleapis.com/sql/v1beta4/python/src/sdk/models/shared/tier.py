from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Tier:
    r"""Tier
    A Google Cloud SQL service tier resource.
    """
    
    disk_quota: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DiskQuota') }})
    ram: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RAM') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    region: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    tier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier') }})
    

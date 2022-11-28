from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BandwidthLimit:
    r"""BandwidthLimit
    Specifies a bandwidth limit for an agent pool.
    """
    
    limit_mbps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitMbps') }})
    

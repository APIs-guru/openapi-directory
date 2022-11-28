from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaListLimits:
    r"""GoogleAppsDriveLabelsV2betaListLimits
    Limits for list-variant of a Field type.
    """
    
    max_entries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxEntries') }})
    

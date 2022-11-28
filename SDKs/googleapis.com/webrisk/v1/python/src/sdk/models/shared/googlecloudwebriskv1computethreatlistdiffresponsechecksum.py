from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum:
    r"""GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum
    The expected state of a client's local database.
    """
    
    sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha256') }})
    

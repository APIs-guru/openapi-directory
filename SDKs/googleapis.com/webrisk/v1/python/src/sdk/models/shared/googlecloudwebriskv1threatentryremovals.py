from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudWebriskV1ThreatEntryRemovals:
    r"""GoogleCloudWebriskV1ThreatEntryRemovals
    Contains the set of entries to remove from a local database.
    """
    
    raw_indices: Optional[GoogleCloudWebriskV1RawIndices] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawIndices') }})
    rice_indices: Optional[GoogleCloudWebriskV1RiceDeltaEncoding] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('riceIndices') }})
    

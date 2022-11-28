from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudWebriskV1ThreatEntryAdditions:
    r"""GoogleCloudWebriskV1ThreatEntryAdditions
    Contains the set of entries to add to a local database. May contain a combination of compressed and raw data in a single response.
    """
    
    raw_hashes: Optional[List[GoogleCloudWebriskV1RawHashes]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawHashes') }})
    rice_hashes: Optional[GoogleCloudWebriskV1RiceDeltaEncoding] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('riceHashes') }})
    

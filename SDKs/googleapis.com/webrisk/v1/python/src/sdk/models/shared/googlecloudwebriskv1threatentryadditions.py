from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudwebriskv1rawhashes
from . import googlecloudwebriskv1ricedeltaencoding


@dataclass_json
@dataclass
class GoogleCloudWebriskV1ThreatEntryAdditions:
    raw_hashes: Optional[List[googlecloudwebriskv1rawhashes.GoogleCloudWebriskV1RawHashes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rawHashes' }})
    rice_hashes: Optional[googlecloudwebriskv1ricedeltaencoding.GoogleCloudWebriskV1RiceDeltaEncoding] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'riceHashes' }})
    

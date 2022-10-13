from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudwebriskv1rawindices
from . import googlecloudwebriskv1ricedeltaencoding


@dataclass_json
@dataclass
class GoogleCloudWebriskV1ThreatEntryRemovals:
    raw_indices: Optional[googlecloudwebriskv1rawindices.GoogleCloudWebriskV1RawIndices] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rawIndices' }})
    rice_indices: Optional[googlecloudwebriskv1ricedeltaencoding.GoogleCloudWebriskV1RiceDeltaEncoding] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'riceIndices' }})
    

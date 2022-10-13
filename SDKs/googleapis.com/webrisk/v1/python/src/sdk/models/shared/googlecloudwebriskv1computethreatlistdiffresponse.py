from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudwebriskv1threatentryadditions
from . import googlecloudwebriskv1computethreatlistdiffresponsechecksum
from . import googlecloudwebriskv1threatentryremovals

class GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum(str, Enum):
    RESPONSE_TYPE_UNSPECIFIED = "RESPONSE_TYPE_UNSPECIFIED"
    DIFF = "DIFF"
    RESET = "RESET"


@dataclass_json
@dataclass
class GoogleCloudWebriskV1ComputeThreatListDiffResponse:
    additions: Optional[googlecloudwebriskv1threatentryadditions.GoogleCloudWebriskV1ThreatEntryAdditions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additions' }})
    checksum: Optional[googlecloudwebriskv1computethreatlistdiffresponsechecksum.GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checksum' }})
    new_version_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newVersionToken' }})
    recommended_next_diff: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendedNextDiff' }})
    removals: Optional[googlecloudwebriskv1threatentryremovals.GoogleCloudWebriskV1ThreatEntryRemovals] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removals' }})
    response_type: Optional[GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseType' }})
    

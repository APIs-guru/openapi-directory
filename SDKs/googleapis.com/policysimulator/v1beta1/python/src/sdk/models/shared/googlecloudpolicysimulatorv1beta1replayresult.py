from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudpolicysimulatorv1beta1accesstuple
from . import googlecloudpolicysimulatorv1beta1replaydiff
from . import googlerpcstatus
from . import googletypedate


@dataclass_json
@dataclass
class GoogleCloudPolicysimulatorV1beta1ReplayResult:
    access_tuple: Optional[googlecloudpolicysimulatorv1beta1accesstuple.GoogleCloudPolicysimulatorV1beta1AccessTuple] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessTuple' }})
    diff: Optional[googlecloudpolicysimulatorv1beta1replaydiff.GoogleCloudPolicysimulatorV1beta1ReplayDiff] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diff' }})
    error: Optional[googlerpcstatus.GoogleRPCStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    last_seen_date: Optional[googletypedate.GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastSeenDate' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    

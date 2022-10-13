from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudpolicysimulatorv1accessstatediff


@dataclass_json
@dataclass
class GoogleCloudPolicysimulatorV1ReplayDiff:
    access_diff: Optional[googlecloudpolicysimulatorv1accessstatediff.GoogleCloudPolicysimulatorV1AccessStateDiff] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessDiff' }})
    

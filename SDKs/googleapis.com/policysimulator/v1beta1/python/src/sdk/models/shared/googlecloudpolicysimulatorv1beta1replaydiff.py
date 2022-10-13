from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudpolicysimulatorv1beta1accessstatediff


@dataclass_json
@dataclass
class GoogleCloudPolicysimulatorV1beta1ReplayDiff:
    access_diff: Optional[googlecloudpolicysimulatorv1beta1accessstatediff.GoogleCloudPolicysimulatorV1beta1AccessStateDiff] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessDiff' }})
    

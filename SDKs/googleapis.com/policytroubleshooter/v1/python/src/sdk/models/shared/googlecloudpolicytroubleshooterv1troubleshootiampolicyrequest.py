from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudpolicytroubleshooterv1accesstuple


@dataclass_json
@dataclass
class GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest:
    access_tuple: Optional[googlecloudpolicytroubleshooterv1accesstuple.GoogleCloudPolicytroubleshooterV1AccessTuple] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessTuple' }})
    

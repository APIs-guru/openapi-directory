from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudpolicytroubleshooterv1betaaccesstuple


@dataclass_json
@dataclass
class GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest:
    access_tuple: Optional[googlecloudpolicytroubleshooterv1betaaccesstuple.GoogleCloudPolicytroubleshooterV1betaAccessTuple] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessTuple' }})
    

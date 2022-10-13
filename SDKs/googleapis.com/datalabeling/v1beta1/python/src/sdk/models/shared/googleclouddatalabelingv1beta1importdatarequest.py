from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1inputconfig


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ImportDataRequest:
    input_config: Optional[googleclouddatalabelingv1beta1inputconfig.GoogleCloudDatalabelingV1beta1InputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    user_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userEmailAddress' }})
    

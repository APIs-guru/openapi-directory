from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1customerconstraints


@dataclass_json
@dataclass
class GoogleCloudChannelV1Constraints:
    customer_constraints: Optional[googlecloudchannelv1customerconstraints.GoogleCloudChannelV1CustomerConstraints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerConstraints' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1createmessagerequest


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1BatchCreateMessagesRequest:
    requests: Optional[List[googleclouddialogflowv2beta1createmessagerequest.GoogleCloudDialogflowV2beta1CreateMessageRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    

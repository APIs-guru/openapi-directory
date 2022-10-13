from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2intentmessagesimpleresponse


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageSimpleResponses:
    simple_responses: Optional[List[googleclouddialogflowv2intentmessagesimpleresponse.GoogleCloudDialogflowV2IntentMessageSimpleResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simpleResponses' }})
    

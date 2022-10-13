from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1intentmessagesimpleresponse


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses:
    simple_responses: Optional[List[googleclouddialogflowv2beta1intentmessagesimpleresponse.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simpleResponses' }})
    

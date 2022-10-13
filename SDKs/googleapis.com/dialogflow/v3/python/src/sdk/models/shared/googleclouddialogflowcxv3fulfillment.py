from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3fulfillmentconditionalcases
from . import googleclouddialogflowcxv3responsemessage
from . import googleclouddialogflowcxv3fulfillmentsetparameteraction


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3Fulfillment:
    conditional_cases: Optional[List[googleclouddialogflowcxv3fulfillmentconditionalcases.GoogleCloudDialogflowCxV3FulfillmentConditionalCases]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditionalCases' }})
    messages: Optional[List[googleclouddialogflowcxv3responsemessage.GoogleCloudDialogflowCxV3ResponseMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    return_partial_responses: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnPartialResponses' }})
    set_parameter_actions: Optional[List[googleclouddialogflowcxv3fulfillmentsetparameteraction.GoogleCloudDialogflowCxV3FulfillmentSetParameterAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setParameterActions' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    webhook: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook' }})
    

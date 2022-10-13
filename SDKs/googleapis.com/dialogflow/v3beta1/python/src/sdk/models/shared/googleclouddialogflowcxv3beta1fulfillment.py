from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1fulfillmentconditionalcases
from . import googleclouddialogflowcxv3beta1responsemessage
from . import googleclouddialogflowcxv3beta1fulfillmentsetparameteraction


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1Fulfillment:
    conditional_cases: Optional[List[googleclouddialogflowcxv3beta1fulfillmentconditionalcases.GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditionalCases' }})
    messages: Optional[List[googleclouddialogflowcxv3beta1responsemessage.GoogleCloudDialogflowCxV3beta1ResponseMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    return_partial_responses: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnPartialResponses' }})
    set_parameter_actions: Optional[List[googleclouddialogflowcxv3beta1fulfillmentsetparameteraction.GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setParameterActions' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    webhook: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook' }})
    

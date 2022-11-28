from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1Fulfillment:
    r"""GoogleCloudDialogflowCxV3beta1Fulfillment
    A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
    """
    
    conditional_cases: Optional[List[GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditionalCases') }})
    messages: Optional[List[GoogleCloudDialogflowCxV3beta1ResponseMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    return_partial_responses: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnPartialResponses') }})
    set_parameter_actions: Optional[List[GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setParameterActions') }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    webhook: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1FulfillmentInput:
    r"""GoogleCloudDialogflowCxV3beta1FulfillmentInput
    A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
    """
    
    conditional_cases: Optional[List[GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditionalCases') }})
    messages: Optional[List[GoogleCloudDialogflowCxV3beta1ResponseMessageInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    return_partial_responses: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnPartialResponses') }})
    set_parameter_actions: Optional[List[GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setParameterActions') }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    webhook: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    

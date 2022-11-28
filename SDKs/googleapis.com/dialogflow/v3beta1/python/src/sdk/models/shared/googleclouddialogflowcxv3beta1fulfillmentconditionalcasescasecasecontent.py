from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent:
    r"""GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent
    The list of messages or conditional cases to activate for this case.
    """
    
    additional_cases: Optional[GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalCases') }})
    message: Optional[GoogleCloudDialogflowCxV3beta1ResponseMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContentInput:
    r"""GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContentInput
    The list of messages or conditional cases to activate for this case.
    """
    
    additional_cases: Optional[GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalCases') }})
    message: Optional[GoogleCloudDialogflowCxV3beta1ResponseMessageInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput:
    r"""GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput
    Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.
    """
    
    case_content: Optional[List[GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseContent') }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase:
    r"""GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase
    Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.
    """
    
    case_content: Optional[List[GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseContent') }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    

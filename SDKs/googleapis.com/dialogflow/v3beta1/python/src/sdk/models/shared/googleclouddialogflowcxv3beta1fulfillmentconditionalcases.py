from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesInput:
    r"""GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesInput
    A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
    """
    
    cases: Optional[List[GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cases') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases:
    r"""GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases
    A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
    """
    
    cases: Optional[List[GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cases') }})
    

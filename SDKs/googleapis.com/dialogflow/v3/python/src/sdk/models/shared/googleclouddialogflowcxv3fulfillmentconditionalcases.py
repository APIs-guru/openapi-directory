from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3FulfillmentConditionalCasesInput:
    r"""GoogleCloudDialogflowCxV3FulfillmentConditionalCasesInput
    A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
    """
    
    cases: Optional[List[GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cases') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3FulfillmentConditionalCases:
    r"""GoogleCloudDialogflowCxV3FulfillmentConditionalCases
    A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
    """
    
    cases: Optional[List[GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cases') }})
    

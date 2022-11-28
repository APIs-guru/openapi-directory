from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1Form:
    r"""GoogleCloudDialogflowCxV3beta1Form
    A form is a data model that groups related parameters that can be collected from the user. The process in which the agent prompts the user and collects parameter values from the user is called form filling. A form can be added to a page. When form filling is done, the filled parameters will be written to the session.
    """
    
    parameters: Optional[List[GoogleCloudDialogflowCxV3beta1FormParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1FormInput:
    r"""GoogleCloudDialogflowCxV3beta1FormInput
    A form is a data model that groups related parameters that can be collected from the user. The process in which the agent prompts the user and collects parameter values from the user is called form filling. A form can be added to a page. When form filling is done, the filled parameters will be written to the session.
    """
    
    parameters: Optional[List[GoogleCloudDialogflowCxV3beta1FormParameterInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    

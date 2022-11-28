from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FormAction:
    r"""FormAction
    A form action describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.
    """
    
    action_method_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionMethodName') }})
    parameters: Optional[List[ActionParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    

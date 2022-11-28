from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CheckDataAccessResponse:
    r"""CheckDataAccessResponse
    Checks if a particular data_id of a User data mapping in the given consent store is consented for a given use.
    """
    
    consent_details: Optional[dict[str, ConsentEvaluation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentDetails') }})
    consented: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consented') }})
    

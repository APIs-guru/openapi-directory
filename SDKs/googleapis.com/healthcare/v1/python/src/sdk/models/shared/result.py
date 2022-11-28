from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Result:
    r"""Result
    The consent evaluation result for a single `data_id`.
    """
    
    consent_details: Optional[dict[str, ConsentEvaluation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentDetails') }})
    consented: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consented') }})
    data_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataId') }})
    

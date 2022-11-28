from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CheckDataAccessRequestResponseViewEnum(str, Enum):
    RESPONSE_VIEW_UNSPECIFIED = "RESPONSE_VIEW_UNSPECIFIED"
    BASIC = "BASIC"
    FULL = "FULL"


@dataclass_json
@dataclass
class CheckDataAccessRequest:
    r"""CheckDataAccessRequest
    Checks if a particular data_id of a User data mapping in the given consent store is consented for a given use.
    """
    
    consent_list: Optional[ConsentList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentList') }})
    data_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataId') }})
    request_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestAttributes') }})
    response_view: Optional[CheckDataAccessRequestResponseViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseView') }})
    

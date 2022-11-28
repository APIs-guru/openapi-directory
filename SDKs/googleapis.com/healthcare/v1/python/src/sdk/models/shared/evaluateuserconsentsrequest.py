from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EvaluateUserConsentsRequestResponseViewEnum(str, Enum):
    RESPONSE_VIEW_UNSPECIFIED = "RESPONSE_VIEW_UNSPECIFIED"
    BASIC = "BASIC"
    FULL = "FULL"


@dataclass_json
@dataclass
class EvaluateUserConsentsRequest:
    r"""EvaluateUserConsentsRequest
    Evaluate a user's Consents for all matching User data mappings. Note: User data mappings are indexed asynchronously, causing slight delays between the time mappings are created or updated and when they are included in EvaluateUserConsents results.
    """
    
    consent_list: Optional[ConsentList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentList') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    request_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestAttributes') }})
    resource_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceAttributes') }})
    response_view: Optional[EvaluateUserConsentsRequestResponseViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseView') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    

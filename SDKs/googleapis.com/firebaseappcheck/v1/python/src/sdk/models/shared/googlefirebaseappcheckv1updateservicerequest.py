from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1UpdateServiceRequest:
    r"""GoogleFirebaseAppcheckV1UpdateServiceRequest
    Request message for the UpdateService method as well as an individual update message for the BatchUpdateServices method.
    """
    
    service: Optional[GoogleFirebaseAppcheckV1Service] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    

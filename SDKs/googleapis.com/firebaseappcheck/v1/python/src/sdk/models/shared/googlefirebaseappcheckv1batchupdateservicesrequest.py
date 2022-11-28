from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1BatchUpdateServicesRequest:
    r"""GoogleFirebaseAppcheckV1BatchUpdateServicesRequest
    Request message for the BatchUpdateServices method.
    """
    
    requests: Optional[List[GoogleFirebaseAppcheckV1UpdateServiceRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    

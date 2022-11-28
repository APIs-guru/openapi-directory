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
class GoogleFirebaseAppcheckV1BatchUpdateServicesResponse:
    r"""GoogleFirebaseAppcheckV1BatchUpdateServicesResponse
    Response message for the BatchUpdateServices method.
    """
    
    services: Optional[List[GoogleFirebaseAppcheckV1Service]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    

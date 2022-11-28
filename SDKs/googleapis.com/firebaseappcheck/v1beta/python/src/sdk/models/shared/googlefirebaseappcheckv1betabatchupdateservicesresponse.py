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
class GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse:
    r"""GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse
    Response message for the BatchUpdateServices method.
    """
    
    services: Optional[List[GoogleFirebaseAppcheckV1betaService]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    

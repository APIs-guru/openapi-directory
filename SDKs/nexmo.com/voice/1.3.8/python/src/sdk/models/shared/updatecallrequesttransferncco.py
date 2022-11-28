from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateCallRequestTransferNccoDestination:
    ncco: List[dict[str, Any]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ncco') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class UpdateCallRequestTransferNcco:
    action: RequestTransferActionParamEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    destination: UpdateCallRequestTransferNccoDestination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    

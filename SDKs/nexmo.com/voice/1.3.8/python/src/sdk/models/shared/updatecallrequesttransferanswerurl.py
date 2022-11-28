from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateCallRequestTransferAnswerURLDestination:
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class UpdateCallRequestTransferAnswerURL:
    action: RequestTransferActionParamEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    destination: UpdateCallRequestTransferAnswerURLDestination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    

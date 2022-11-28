from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TaxSettingsUpdateRequestTaxationModeEnum(str, Enum):
    EXCLUSIVE = "EXCLUSIVE"
    INCLUSIVE = "INCLUSIVE"


@dataclass_json
@dataclass
class TaxSettingsUpdateRequest:
    taxation_mode: TaxSettingsUpdateRequestTaxationModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxationMode') }})
    

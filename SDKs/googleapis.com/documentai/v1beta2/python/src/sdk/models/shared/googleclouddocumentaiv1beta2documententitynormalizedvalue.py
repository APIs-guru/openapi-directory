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
class GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue:
    r"""GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue
    Parsed and normalized entity value.
    """
    
    address_value: Optional[GoogleTypePostalAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressValue') }})
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanValue') }})
    date_value: Optional[GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateValue') }})
    datetime_value: Optional[GoogleTypeDateTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datetimeValue') }})
    float_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floatValue') }})
    integer_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerValue') }})
    money_value: Optional[GoogleTypeMoney] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moneyValue') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

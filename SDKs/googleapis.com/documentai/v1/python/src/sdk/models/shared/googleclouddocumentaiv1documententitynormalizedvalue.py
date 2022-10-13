from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import googletypepostaladdress
from . import googletypedate
from . import googletypedatetime
from . import googletypemoney


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentEntityNormalizedValue:
    address_value: Optional[googletypepostaladdress.GoogleTypePostalAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressValue' }})
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booleanValue' }})
    date_value: Optional[googletypedate.GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateValue' }})
    datetime_value: Optional[googletypedatetime.GoogleTypeDateTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datetimeValue' }})
    float_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floatValue' }})
    integer_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integerValue' }})
    money_value: Optional[googletypemoney.GoogleTypeMoney] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moneyValue' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    

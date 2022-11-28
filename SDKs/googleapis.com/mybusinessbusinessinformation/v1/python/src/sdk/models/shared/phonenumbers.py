from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PhoneNumbers:
    r"""PhoneNumbers
    A collection of phone numbers for the business. During updates, both fields must be set. Clients may not update just the primary or additional phone numbers using the update mask. International phone format is preferred, such as \"+1 415 555 0132\", see more in (https://developers.google.com/style/phone-numbers#international-phone-numbers).
    """
    
    additional_phones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalPhones') }})
    primary_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryPhone') }})
    

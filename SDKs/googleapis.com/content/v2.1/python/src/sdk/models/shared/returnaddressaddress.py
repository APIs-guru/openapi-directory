from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReturnAddressAddress:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    locality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locality') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    recipient_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipientName') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    street_address: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streetAddress') }})
    

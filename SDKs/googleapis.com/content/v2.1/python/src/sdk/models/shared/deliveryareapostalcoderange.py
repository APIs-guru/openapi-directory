from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeliveryAreaPostalCodeRange:
    r"""DeliveryAreaPostalCodeRange
    A range of postal codes that defines the delivery area. Only set `firstPostalCode` when specifying a single postal code.
    """
    
    first_postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstPostalCode') }})
    last_postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastPostalCode') }})
    

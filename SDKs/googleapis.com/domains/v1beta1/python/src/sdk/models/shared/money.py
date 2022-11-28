from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Money:
    r"""Money
    Represents an amount of money with its currency type.
    """
    
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    nanos: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nanos') }})
    units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    

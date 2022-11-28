from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountReport:
    r"""AccountReport
    JSON based account report.
    This account report contains transactions resulting from the query parameters.
    
    'booked' shall be contained if bookingStatus parameter is set to \"booked\" or \"both\".
    
    'pending' is not contained if the bookingStatus parameter is set to \"booked\" or \"information\".
    
    'information' Only contained if the bookingStatus is set to \"information\" and if supported by ASPSP.
    
    """
    
    links: dict[str, HrefType] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    booked: Optional[List[Transactions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booked') }})
    information: Optional[List[Transactions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('information') }})
    pending: Optional[List[Transactions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pending') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LandlordRentArrearsModel:
    r"""LandlordRentArrearsModel
    Landlord Rent Arrears.
    """
    
    chase_notes: Optional[List[LandlordChaseNoteModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChaseNotes') }})
    rent_collected: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RentCollected') }})
    rent_outstanding: Optional[List[LandlordRentOustandingItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RentOutstanding') }})
    total_rent_arrears: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalRentArrears') }})
    

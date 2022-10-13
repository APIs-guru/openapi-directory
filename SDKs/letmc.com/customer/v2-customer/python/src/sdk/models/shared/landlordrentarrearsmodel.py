from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import landlordchasenotemodel
from . import landlordrentoustandingitem


@dataclass_json
@dataclass
class LandlordRentArrearsModel:
    chase_notes: Optional[List[landlordchasenotemodel.LandlordChaseNoteModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChaseNotes' }})
    rent_collected: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RentCollected' }})
    rent_outstanding: Optional[List[landlordrentoustandingitem.LandlordRentOustandingItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RentOutstanding' }})
    total_rent_arrears: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalRentArrears' }})
    

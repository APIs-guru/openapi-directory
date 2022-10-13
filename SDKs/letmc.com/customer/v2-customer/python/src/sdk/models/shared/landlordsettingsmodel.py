from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import landlorddetailsmodel


@dataclass_json
@dataclass
class LandlordSettingsModel:
    linked_accounts: Optional[List[landlorddetailsmodel.LandlordDetailsModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LinkedAccounts' }})
    

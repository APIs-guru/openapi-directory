from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import landlordprofitlossrowmodel


@dataclass_json
@dataclass
class LandlordProfitLossSectionModel:
    rows: Optional[List[landlordprofitlossrowmodel.LandlordProfitLossRowModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rows' }})
    

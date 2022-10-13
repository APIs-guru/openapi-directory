from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keyvaluepair_string_string_


@dataclass_json
@dataclass
class LandlordProfitLossRowModel:
    month_totals: Optional[List[keyvaluepair_string_string_.KeyValuePairStringString]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonthTotals' }})
    nominal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NominalCode' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    total: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Total' }})
    

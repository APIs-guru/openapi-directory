from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import landlordprofitlosssectionmodel
from . import landlordprofitlosssectionmodel
from . import landlordprofitlosssectionmodel


@dataclass_json
@dataclass
class LandlordProfitLossModel:
    direct_costs: Optional[landlordprofitlosssectionmodel.LandlordProfitLossSectionModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectCosts' }})
    gross_profit_loss: Optional[landlordprofitlosssectionmodel.LandlordProfitLossSectionModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrossProfitLoss' }})
    income: Optional[landlordprofitlosssectionmodel.LandlordProfitLossSectionModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Income' }})
    

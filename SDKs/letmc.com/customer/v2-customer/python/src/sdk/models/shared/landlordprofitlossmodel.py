from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LandlordProfitLossModel:
    r"""LandlordProfitLossModel
    Class to represent proffit loss report.
    """
    
    direct_costs: Optional[LandlordProfitLossSectionModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectCosts') }})
    gross_profit_loss: Optional[LandlordProfitLossSectionModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrossProfitLoss') }})
    income: Optional[LandlordProfitLossSectionModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Income') }})
    

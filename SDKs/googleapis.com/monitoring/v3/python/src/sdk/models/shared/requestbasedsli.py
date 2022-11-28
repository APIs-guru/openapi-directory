from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RequestBasedSli:
    r"""RequestBasedSli
    Service Level Indicators for which atomic units of service are counted directly.
    """
    
    distribution_cut: Optional[DistributionCut] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributionCut') }})
    good_total_ratio: Optional[TimeSeriesRatio] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goodTotalRatio') }})
    

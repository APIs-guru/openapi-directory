from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import distributioncut
from . import timeseriesratio


@dataclass_json
@dataclass
class RequestBasedSli:
    distribution_cut: Optional[distributioncut.DistributionCut] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributionCut' }})
    good_total_ratio: Optional[timeseriesratio.TimeSeriesRatio] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goodTotalRatio' }})
    

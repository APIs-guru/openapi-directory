from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SegmentCostEstimate:
    r"""SegmentCostEstimate
    Workload cost estimates for a single time segment.
    """
    
    commitment_cost_estimates: Optional[List[CommitmentCostEstimate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitmentCostEstimates') }})
    segment_start_time: Optional[EstimationTimePoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentStartTime') }})
    segment_total_cost_estimate: Optional[CostEstimate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentTotalCostEstimate') }})
    workload_cost_estimates: Optional[List[WorkloadCostEstimate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadCostEstimates') }})
    

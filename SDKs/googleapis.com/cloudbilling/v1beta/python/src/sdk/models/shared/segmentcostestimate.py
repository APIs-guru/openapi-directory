from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import commitmentcostestimate
from . import estimationtimepoint
from . import costestimate
from . import workloadcostestimate


@dataclass_json
@dataclass
class SegmentCostEstimate:
    commitment_cost_estimates: Optional[List[commitmentcostestimate.CommitmentCostEstimate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitmentCostEstimates' }})
    segment_start_time: Optional[estimationtimepoint.EstimationTimePoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segmentStartTime' }})
    segment_total_cost_estimate: Optional[costestimate.CostEstimate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segmentTotalCostEstimate' }})
    workload_cost_estimates: Optional[List[workloadcostestimate.WorkloadCostEstimate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workloadCostEstimates' }})
    

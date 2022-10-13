from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2value


@dataclass_json
@dataclass
class GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIDValues:
    estimated_probability: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedProbability' }})
    quasi_ids_values: Optional[List[googleprivacydlpv2value.GooglePrivacyDlpV2Value]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quasiIdsValues' }})
    

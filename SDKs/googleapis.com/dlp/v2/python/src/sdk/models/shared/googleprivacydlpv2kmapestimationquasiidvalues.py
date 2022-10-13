from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2value


@dataclass_json
@dataclass
class GooglePrivacyDlpV2KMapEstimationQuasiIDValues:
    estimated_anonymity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedAnonymity' }})
    quasi_ids_values: Optional[List[googleprivacydlpv2value.GooglePrivacyDlpV2Value]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quasiIdsValues' }})
    

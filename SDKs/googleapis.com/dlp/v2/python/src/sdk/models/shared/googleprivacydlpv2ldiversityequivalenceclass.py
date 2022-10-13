from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2value
from . import googleprivacydlpv2valuefrequency


@dataclass_json
@dataclass
class GooglePrivacyDlpV2LDiversityEquivalenceClass:
    equivalence_class_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'equivalenceClassSize' }})
    num_distinct_sensitive_values: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numDistinctSensitiveValues' }})
    quasi_ids_values: Optional[List[googleprivacydlpv2value.GooglePrivacyDlpV2Value]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quasiIdsValues' }})
    top_sensitive_values: Optional[List[googleprivacydlpv2valuefrequency.GooglePrivacyDlpV2ValueFrequency]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topSensitiveValues' }})
    

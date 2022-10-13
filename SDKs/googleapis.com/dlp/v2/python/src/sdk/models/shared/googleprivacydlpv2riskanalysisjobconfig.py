from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2action
from . import googleprivacydlpv2privacymetric
from . import googleprivacydlpv2bigquerytable


@dataclass_json
@dataclass
class GooglePrivacyDlpV2RiskAnalysisJobConfig:
    actions: Optional[List[googleprivacydlpv2action.GooglePrivacyDlpV2Action]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    privacy_metric: Optional[googleprivacydlpv2privacymetric.GooglePrivacyDlpV2PrivacyMetric] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacyMetric' }})
    source_table: Optional[googleprivacydlpv2bigquerytable.GooglePrivacyDlpV2BigQueryTable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceTable' }})
    

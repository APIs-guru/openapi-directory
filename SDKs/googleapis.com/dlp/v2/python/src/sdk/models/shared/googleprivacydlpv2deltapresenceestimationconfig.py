from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2statisticaltable
from . import googleprivacydlpv2quasiid


@dataclass_json
@dataclass
class GooglePrivacyDlpV2DeltaPresenceEstimationConfig:
    auxiliary_tables: Optional[List[googleprivacydlpv2statisticaltable.GooglePrivacyDlpV2StatisticalTable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auxiliaryTables' }})
    quasi_ids: Optional[List[googleprivacydlpv2quasiid.GooglePrivacyDlpV2QuasiID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quasiIds' }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionCode' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2hybridinspectstatistics
from . import googleprivacydlpv2infotypestats


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Result:
    hybrid_stats: Optional[googleprivacydlpv2hybridinspectstatistics.GooglePrivacyDlpV2HybridInspectStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hybridStats' }})
    info_type_stats: Optional[List[googleprivacydlpv2infotypestats.GooglePrivacyDlpV2InfoTypeStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infoTypeStats' }})
    processed_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processedBytes' }})
    total_estimated_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalEstimatedBytes' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2categoricalstatshistogrambucket


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CategoricalStatsResult:
    value_frequency_histogram_buckets: Optional[List[googleprivacydlpv2categoricalstatshistogrambucket.GooglePrivacyDlpV2CategoricalStatsHistogramBucket]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueFrequencyHistogramBuckets' }})
    

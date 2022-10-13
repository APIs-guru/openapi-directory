from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2categoricalstatsconfig
from . import googleprivacydlpv2deltapresenceestimationconfig
from . import googleprivacydlpv2kanonymityconfig
from . import googleprivacydlpv2kmapestimationconfig
from . import googleprivacydlpv2ldiversityconfig
from . import googleprivacydlpv2numericalstatsconfig


@dataclass_json
@dataclass
class GooglePrivacyDlpV2PrivacyMetric:
    categorical_stats_config: Optional[googleprivacydlpv2categoricalstatsconfig.GooglePrivacyDlpV2CategoricalStatsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoricalStatsConfig' }})
    delta_presence_estimation_config: Optional[googleprivacydlpv2deltapresenceestimationconfig.GooglePrivacyDlpV2DeltaPresenceEstimationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deltaPresenceEstimationConfig' }})
    k_anonymity_config: Optional[googleprivacydlpv2kanonymityconfig.GooglePrivacyDlpV2KAnonymityConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kAnonymityConfig' }})
    k_map_estimation_config: Optional[googleprivacydlpv2kmapestimationconfig.GooglePrivacyDlpV2KMapEstimationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kMapEstimationConfig' }})
    l_diversity_config: Optional[googleprivacydlpv2ldiversityconfig.GooglePrivacyDlpV2LDiversityConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lDiversityConfig' }})
    numerical_stats_config: Optional[googleprivacydlpv2numericalstatsconfig.GooglePrivacyDlpV2NumericalStatsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numericalStatsConfig' }})
    

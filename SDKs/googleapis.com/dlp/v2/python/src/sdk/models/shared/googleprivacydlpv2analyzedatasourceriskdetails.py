from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2categoricalstatsresult
from . import googleprivacydlpv2deltapresenceestimationresult
from . import googleprivacydlpv2kanonymityresult
from . import googleprivacydlpv2kmapestimationresult
from . import googleprivacydlpv2ldiversityresult
from . import googleprivacydlpv2numericalstatsresult
from . import googleprivacydlpv2requestedriskanalysisoptions
from . import googleprivacydlpv2privacymetric
from . import googleprivacydlpv2bigquerytable


@dataclass_json
@dataclass
class GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails:
    categorical_stats_result: Optional[googleprivacydlpv2categoricalstatsresult.GooglePrivacyDlpV2CategoricalStatsResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoricalStatsResult' }})
    delta_presence_estimation_result: Optional[googleprivacydlpv2deltapresenceestimationresult.GooglePrivacyDlpV2DeltaPresenceEstimationResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deltaPresenceEstimationResult' }})
    k_anonymity_result: Optional[googleprivacydlpv2kanonymityresult.GooglePrivacyDlpV2KAnonymityResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kAnonymityResult' }})
    k_map_estimation_result: Optional[googleprivacydlpv2kmapestimationresult.GooglePrivacyDlpV2KMapEstimationResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kMapEstimationResult' }})
    l_diversity_result: Optional[googleprivacydlpv2ldiversityresult.GooglePrivacyDlpV2LDiversityResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lDiversityResult' }})
    numerical_stats_result: Optional[googleprivacydlpv2numericalstatsresult.GooglePrivacyDlpV2NumericalStatsResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numericalStatsResult' }})
    requested_options: Optional[googleprivacydlpv2requestedriskanalysisoptions.GooglePrivacyDlpV2RequestedRiskAnalysisOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedOptions' }})
    requested_privacy_metric: Optional[googleprivacydlpv2privacymetric.GooglePrivacyDlpV2PrivacyMetric] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedPrivacyMetric' }})
    requested_source_table: Optional[googleprivacydlpv2bigquerytable.GooglePrivacyDlpV2BigQueryTable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedSourceTable' }})
    

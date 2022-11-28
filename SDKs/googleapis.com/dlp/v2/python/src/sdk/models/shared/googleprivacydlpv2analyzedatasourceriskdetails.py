from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails:
    r"""GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails
    Result of a risk analysis operation request.
    """
    
    categorical_stats_result: Optional[GooglePrivacyDlpV2CategoricalStatsResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoricalStatsResult') }})
    delta_presence_estimation_result: Optional[GooglePrivacyDlpV2DeltaPresenceEstimationResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deltaPresenceEstimationResult') }})
    k_anonymity_result: Optional[GooglePrivacyDlpV2KAnonymityResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kAnonymityResult') }})
    k_map_estimation_result: Optional[GooglePrivacyDlpV2KMapEstimationResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kMapEstimationResult') }})
    l_diversity_result: Optional[GooglePrivacyDlpV2LDiversityResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lDiversityResult') }})
    numerical_stats_result: Optional[GooglePrivacyDlpV2NumericalStatsResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numericalStatsResult') }})
    requested_options: Optional[GooglePrivacyDlpV2RequestedRiskAnalysisOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedOptions') }})
    requested_privacy_metric: Optional[GooglePrivacyDlpV2PrivacyMetric] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedPrivacyMetric') }})
    requested_source_table: Optional[GooglePrivacyDlpV2BigQueryTable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedSourceTable') }})
    

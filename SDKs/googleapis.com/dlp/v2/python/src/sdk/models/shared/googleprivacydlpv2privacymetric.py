from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2PrivacyMetric:
    r"""GooglePrivacyDlpV2PrivacyMetric
    Privacy metric to compute for reidentification risk analysis.
    """
    
    categorical_stats_config: Optional[GooglePrivacyDlpV2CategoricalStatsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoricalStatsConfig') }})
    delta_presence_estimation_config: Optional[GooglePrivacyDlpV2DeltaPresenceEstimationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deltaPresenceEstimationConfig') }})
    k_anonymity_config: Optional[GooglePrivacyDlpV2KAnonymityConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kAnonymityConfig') }})
    k_map_estimation_config: Optional[GooglePrivacyDlpV2KMapEstimationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kMapEstimationConfig') }})
    l_diversity_config: Optional[GooglePrivacyDlpV2LDiversityConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lDiversityConfig') }})
    numerical_stats_config: Optional[GooglePrivacyDlpV2NumericalStatsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numericalStatsConfig') }})
    

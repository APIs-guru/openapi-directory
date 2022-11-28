from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2RiskAnalysisJobConfig:
    r"""GooglePrivacyDlpV2RiskAnalysisJobConfig
    Configuration for a risk analysis job. See https://cloud.google.com/dlp/docs/concepts-risk-analysis to learn more.
    """
    
    actions: Optional[List[GooglePrivacyDlpV2Action]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    privacy_metric: Optional[GooglePrivacyDlpV2PrivacyMetric] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacyMetric') }})
    source_table: Optional[GooglePrivacyDlpV2BigQueryTable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceTable') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1AnalysisResult:
    r"""GoogleCloudContactcenterinsightsV1AnalysisResult
    The result of an analysis.
    """
    
    call_analysis_metadata: Optional[GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callAnalysisMetadata') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    

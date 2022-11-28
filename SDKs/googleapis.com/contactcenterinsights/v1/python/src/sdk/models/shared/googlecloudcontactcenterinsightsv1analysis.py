from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1AnalysisInput:
    r"""GoogleCloudContactcenterinsightsV1AnalysisInput
    The analysis resource.
    """
    
    analysis_result: Optional[GoogleCloudContactcenterinsightsV1AnalysisResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisResult') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1Analysis:
    r"""GoogleCloudContactcenterinsightsV1Analysis
    The analysis resource.
    """
    
    analysis_result: Optional[GoogleCloudContactcenterinsightsV1AnalysisResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisResult') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    request_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestTime') }})
    

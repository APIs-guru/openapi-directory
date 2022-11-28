from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnalyzeIamPolicyLongrunningRequest:
    r"""AnalyzeIamPolicyLongrunningRequest
    A request message for AssetService.AnalyzeIamPolicyLongrunning.
    """
    
    analysis_query: Optional[IamPolicyAnalysisQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisQuery') }})
    output_config: Optional[IamPolicyAnalysisOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    saved_analysis_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savedAnalysisQuery') }})
    

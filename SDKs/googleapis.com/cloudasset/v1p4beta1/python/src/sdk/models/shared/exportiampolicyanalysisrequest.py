from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExportIamPolicyAnalysisRequest:
    r"""ExportIamPolicyAnalysisRequest
    A request message for AssetService.ExportIamPolicyAnalysis.
    """
    
    analysis_query: Optional[IamPolicyAnalysisQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisQuery') }})
    options: Optional[Options] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    output_config: Optional[IamPolicyAnalysisOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AnalysisCompleted:
    r"""AnalysisCompleted
    Indicates which analysis completed successfully. Multiple types of analysis can be performed on a single resource.
    """
    
    analysis_type: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisType') }})
    

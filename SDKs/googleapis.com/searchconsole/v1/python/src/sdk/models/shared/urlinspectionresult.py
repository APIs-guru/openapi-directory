from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class URLInspectionResult:
    r"""URLInspectionResult
    URL inspection result, including all inspection results.
    """
    
    amp_result: Optional[AmpInspectionResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ampResult') }})
    index_status_result: Optional[IndexStatusInspectionResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexStatusResult') }})
    inspection_result_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectionResultLink') }})
    mobile_usability_result: Optional[MobileUsabilityInspectionResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileUsabilityResult') }})
    rich_results_result: Optional[RichResultsInspectionResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('richResultsResult') }})
    

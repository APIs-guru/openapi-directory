from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import ampinspectionresult
from . import indexstatusinspectionresult
from . import mobileusabilityinspectionresult
from . import richresultsinspectionresult


@dataclass_json
@dataclass
class URLInspectionResult:
    amp_result: Optional[ampinspectionresult.AmpInspectionResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ampResult' }})
    index_status_result: Optional[indexstatusinspectionresult.IndexStatusInspectionResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexStatusResult' }})
    inspection_result_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inspectionResultLink' }})
    mobile_usability_result: Optional[mobileusabilityinspectionresult.MobileUsabilityInspectionResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileUsabilityResult' }})
    rich_results_result: Optional[richresultsinspectionresult.RichResultsInspectionResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'richResultsResult' }})
    

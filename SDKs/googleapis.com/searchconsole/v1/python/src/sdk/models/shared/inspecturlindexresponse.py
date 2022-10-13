from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import urlinspectionresult


@dataclass_json
@dataclass
class InspectURLIndexResponse:
    inspection_result: Optional[urlinspectionresult.URLInspectionResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inspectionResult' }})
    

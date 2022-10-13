from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnum(str, Enum):
    ERROR_TYPE_UNSPECIFIED = "ERROR_TYPE_UNSPECIFIED"
    APPLICATION_NOT_RESPONDING = "APPLICATION_NOT_RESPONDING"
    CRASH = "CRASH"


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1alpha1ErrorReport:
    issue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issue' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    report_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportText' }})
    type: Optional[GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

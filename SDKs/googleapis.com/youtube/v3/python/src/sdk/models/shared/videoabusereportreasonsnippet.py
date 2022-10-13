from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import videoabusereportsecondaryreason


@dataclass_json
@dataclass
class VideoAbuseReportReasonSnippet:
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    secondary_reasons: Optional[List[videoabusereportsecondaryreason.VideoAbuseReportSecondaryReason]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryReasons' }})
    

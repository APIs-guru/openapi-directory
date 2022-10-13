from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MobileUsabilityIssueIssueTypeEnum(str, Enum):
    MOBILE_USABILITY_ISSUE_TYPE_UNSPECIFIED = "MOBILE_USABILITY_ISSUE_TYPE_UNSPECIFIED"
    USES_INCOMPATIBLE_PLUGINS = "USES_INCOMPATIBLE_PLUGINS"
    CONFIGURE_VIEWPORT = "CONFIGURE_VIEWPORT"
    FIXED_WIDTH_VIEWPORT = "FIXED_WIDTH_VIEWPORT"
    SIZE_CONTENT_TO_VIEWPORT = "SIZE_CONTENT_TO_VIEWPORT"
    USE_LEGIBLE_FONT_SIZES = "USE_LEGIBLE_FONT_SIZES"
    TAP_TARGETS_TOO_CLOSE = "TAP_TARGETS_TOO_CLOSE"

class MobileUsabilityIssueSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    WARNING = "WARNING"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class MobileUsabilityIssue:
    issue_type: Optional[MobileUsabilityIssueIssueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issueType' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    severity: Optional[MobileUsabilityIssueSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    

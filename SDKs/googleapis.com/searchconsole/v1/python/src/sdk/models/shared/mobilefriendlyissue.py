from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MobileFriendlyIssueRuleEnum(str, Enum):
    MOBILE_FRIENDLY_RULE_UNSPECIFIED = "MOBILE_FRIENDLY_RULE_UNSPECIFIED"
    USES_INCOMPATIBLE_PLUGINS = "USES_INCOMPATIBLE_PLUGINS"
    CONFIGURE_VIEWPORT = "CONFIGURE_VIEWPORT"
    FIXED_WIDTH_VIEWPORT = "FIXED_WIDTH_VIEWPORT"
    SIZE_CONTENT_TO_VIEWPORT = "SIZE_CONTENT_TO_VIEWPORT"
    USE_LEGIBLE_FONT_SIZES = "USE_LEGIBLE_FONT_SIZES"
    TAP_TARGETS_TOO_CLOSE = "TAP_TARGETS_TOO_CLOSE"


@dataclass_json
@dataclass
class MobileFriendlyIssue:
    r"""MobileFriendlyIssue
    Mobile-friendly issue.
    """
    
    rule: Optional[MobileFriendlyIssueRuleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    

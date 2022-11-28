from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VideoAbuseReportReasonSnippet:
    r"""VideoAbuseReportReasonSnippet
    Basic details about a video category, such as its localized title.
    """
    
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    secondary_reasons: Optional[List[VideoAbuseReportSecondaryReason]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryReasons') }})
    

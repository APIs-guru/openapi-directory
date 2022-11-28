from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAudienceTargetingSetting:
    r"""GoogleAudienceTargetingSetting
    Details of Google audience targeting setting.
    """
    
    google_audience_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleAudienceId') }})
    

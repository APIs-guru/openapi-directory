from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDiscoveryengineV1alphaMediaInfo:
    r"""GoogleCloudDiscoveryengineV1alphaMediaInfo
    Media-specific user event information.
    """
    
    media_progress_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaProgressDuration') }})
    media_progress_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaProgressPercentage') }})
    

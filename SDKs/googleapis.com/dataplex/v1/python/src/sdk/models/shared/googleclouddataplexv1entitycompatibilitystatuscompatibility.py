from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility:
    r"""GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility
    Provides compatibility information for a specific metadata store.
    """
    
    compatible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatible') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

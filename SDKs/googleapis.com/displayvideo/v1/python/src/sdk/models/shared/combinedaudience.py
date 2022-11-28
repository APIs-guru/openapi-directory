from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CombinedAudience:
    r"""CombinedAudience
    Describes a combined audience resource.
    """
    
    combined_audience_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combinedAudienceId') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

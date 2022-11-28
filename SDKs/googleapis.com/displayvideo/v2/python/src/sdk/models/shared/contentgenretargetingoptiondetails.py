from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ContentGenreTargetingOptionDetails:
    r"""ContentGenreTargetingOptionDetails
    Represents a targetable content genre. This will be populated in the content_genre_details field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    

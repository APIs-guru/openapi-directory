from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1ValueMatcher:
    r"""GoogleCloudRecommenderV1ValueMatcher
    Contains various matching options for values for a GCP resource field.
    """
    
    matches_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchesPattern') }})
    

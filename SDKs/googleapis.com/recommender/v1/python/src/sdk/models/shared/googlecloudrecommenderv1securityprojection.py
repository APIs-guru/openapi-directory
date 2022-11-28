from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1SecurityProjection:
    r"""GoogleCloudRecommenderV1SecurityProjection
    Contains various ways of describing the impact on Security.
    """
    
    details: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    

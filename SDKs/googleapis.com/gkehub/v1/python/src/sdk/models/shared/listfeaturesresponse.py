from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListFeaturesResponse:
    r"""ListFeaturesResponse
    Response message for the `GkeHub.ListFeatures` method.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    resources: Optional[List[Feature]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    

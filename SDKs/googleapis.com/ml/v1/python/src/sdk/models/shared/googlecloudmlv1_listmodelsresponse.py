from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudMlV1ListModelsResponse:
    r"""GoogleCloudMlV1ListModelsResponse
    Response message for the ListModels method.
    """
    
    models: Optional[List[GoogleCloudMlV1Model]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('models') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

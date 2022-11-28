from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaListModelsResponse:
    r"""GoogleCloudRetailV2betaListModelsResponse
    Response to a ListModelRequest.
    """
    
    models: Optional[List[GoogleCloudRetailV2betaModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('models') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

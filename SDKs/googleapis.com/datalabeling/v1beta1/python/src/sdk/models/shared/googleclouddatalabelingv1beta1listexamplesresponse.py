from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ListExamplesResponse:
    r"""GoogleCloudDatalabelingV1beta1ListExamplesResponse
    Results of listing Examples in and annotated dataset.
    """
    
    examples: Optional[List[GoogleCloudDatalabelingV1beta1Example]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('examples') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

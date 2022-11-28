from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1ListProcessorsResponse:
    r"""GoogleCloudDocumentaiV1ListProcessorsResponse
    Response message for list processors.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    processors: Optional[List[GoogleCloudDocumentaiV1Processor]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processors') }})
    

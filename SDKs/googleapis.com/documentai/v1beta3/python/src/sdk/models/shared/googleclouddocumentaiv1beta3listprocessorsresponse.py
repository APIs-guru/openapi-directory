from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3ListProcessorsResponse:
    r"""GoogleCloudDocumentaiV1beta3ListProcessorsResponse
    Response message for list processors.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    processors: Optional[List[GoogleCloudDocumentaiV1beta3Processor]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processors') }})
    

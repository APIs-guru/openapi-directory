from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1ListProcessorVersionsResponse:
    r"""GoogleCloudDocumentaiV1ListProcessorVersionsResponse
    Response message for list processors.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    processor_versions: Optional[List[GoogleCloudDocumentaiV1ProcessorVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processorVersions') }})
    

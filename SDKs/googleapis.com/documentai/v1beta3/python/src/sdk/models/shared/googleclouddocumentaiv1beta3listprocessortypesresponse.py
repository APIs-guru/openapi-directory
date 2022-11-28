from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse:
    r"""GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse
    Response message for list processor types.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    processor_types: Optional[List[GoogleCloudDocumentaiV1beta3ProcessorType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processorTypes') }})
    

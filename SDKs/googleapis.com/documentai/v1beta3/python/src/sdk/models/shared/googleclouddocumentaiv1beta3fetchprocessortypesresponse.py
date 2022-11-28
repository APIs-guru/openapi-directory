from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse:
    r"""GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse
    Response message for fetch processor types.
    """
    
    processor_types: Optional[List[GoogleCloudDocumentaiV1beta3ProcessorType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processorTypes') }})
    

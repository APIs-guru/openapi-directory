from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest:
    r"""GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest
    Request message for the create processor version method.
    """
    
    base_processor_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseProcessorVersion') }})
    document_schema: Optional[GoogleCloudDocumentaiV1beta3DocumentSchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentSchema') }})
    input_data: Optional[GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputData') }})
    processor_version: Optional[GoogleCloudDocumentaiV1beta3ProcessorVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processorVersion') }})
    

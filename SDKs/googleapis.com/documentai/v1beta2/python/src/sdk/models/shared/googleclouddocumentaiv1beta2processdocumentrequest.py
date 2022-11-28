from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2ProcessDocumentRequest:
    r"""GoogleCloudDocumentaiV1beta2ProcessDocumentRequest
    Request to process one document.
    """
    
    automl_params: Optional[GoogleCloudDocumentaiV1beta2AutoMlParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automlParams') }})
    document_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentType') }})
    entity_extraction_params: Optional[GoogleCloudDocumentaiV1beta2EntityExtractionParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityExtractionParams') }})
    form_extraction_params: Optional[GoogleCloudDocumentaiV1beta2FormExtractionParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formExtractionParams') }})
    input_config: Optional[GoogleCloudDocumentaiV1beta2InputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    ocr_params: Optional[GoogleCloudDocumentaiV1beta2OcrParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ocrParams') }})
    output_config: Optional[GoogleCloudDocumentaiV1beta2OutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    table_extraction_params: Optional[GoogleCloudDocumentaiV1beta2TableExtractionParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableExtractionParams') }})
    

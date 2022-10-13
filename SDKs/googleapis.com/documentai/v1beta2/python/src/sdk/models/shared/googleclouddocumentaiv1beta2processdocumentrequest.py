from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta2automlparams
from . import googleclouddocumentaiv1beta2entityextractionparams
from . import googleclouddocumentaiv1beta2formextractionparams
from . import googleclouddocumentaiv1beta2inputconfig
from . import googleclouddocumentaiv1beta2ocrparams
from . import googleclouddocumentaiv1beta2outputconfig
from . import googleclouddocumentaiv1beta2tableextractionparams


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2ProcessDocumentRequest:
    automl_params: Optional[googleclouddocumentaiv1beta2automlparams.GoogleCloudDocumentaiV1beta2AutoMlParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automlParams' }})
    document_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentType' }})
    entity_extraction_params: Optional[googleclouddocumentaiv1beta2entityextractionparams.GoogleCloudDocumentaiV1beta2EntityExtractionParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityExtractionParams' }})
    form_extraction_params: Optional[googleclouddocumentaiv1beta2formextractionparams.GoogleCloudDocumentaiV1beta2FormExtractionParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formExtractionParams' }})
    input_config: Optional[googleclouddocumentaiv1beta2inputconfig.GoogleCloudDocumentaiV1beta2InputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    ocr_params: Optional[googleclouddocumentaiv1beta2ocrparams.GoogleCloudDocumentaiV1beta2OcrParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ocrParams' }})
    output_config: Optional[googleclouddocumentaiv1beta2outputconfig.GoogleCloudDocumentaiV1beta2OutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputConfig' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    table_extraction_params: Optional[googleclouddocumentaiv1beta2tableextractionparams.GoogleCloudDocumentaiV1beta2TableExtractionParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableExtractionParams' }})
    

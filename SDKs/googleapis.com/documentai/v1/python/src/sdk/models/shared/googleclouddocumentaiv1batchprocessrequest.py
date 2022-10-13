from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1documentoutputconfig
from . import googleclouddocumentaiv1batchdocumentsinputconfig


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1BatchProcessRequest:
    document_output_config: Optional[googleclouddocumentaiv1documentoutputconfig.GoogleCloudDocumentaiV1DocumentOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentOutputConfig' }})
    input_documents: Optional[googleclouddocumentaiv1batchdocumentsinputconfig.GoogleCloudDocumentaiV1BatchDocumentsInputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputDocuments' }})
    skip_human_review: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipHumanReview' }})
    

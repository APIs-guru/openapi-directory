from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3documentoutputconfig
from . import googleclouddocumentaiv1beta3batchprocessrequestbatchinputconfig
from . import googleclouddocumentaiv1beta3batchdocumentsinputconfig
from . import googleclouddocumentaiv1beta3batchprocessrequestbatchoutputconfig


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3BatchProcessRequest:
    document_output_config: Optional[googleclouddocumentaiv1beta3documentoutputconfig.GoogleCloudDocumentaiV1beta3DocumentOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentOutputConfig' }})
    input_configs: Optional[List[googleclouddocumentaiv1beta3batchprocessrequestbatchinputconfig.GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfigs' }})
    input_documents: Optional[googleclouddocumentaiv1beta3batchdocumentsinputconfig.GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputDocuments' }})
    output_config: Optional[googleclouddocumentaiv1beta3batchprocessrequestbatchoutputconfig.GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputConfig' }})
    skip_human_review: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipHumanReview' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1importdocumenttemplate
from . import googleclouddialogflowv2beta1gcssources


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ImportDocumentsRequest:
    document_template: Optional[googleclouddialogflowv2beta1importdocumenttemplate.GoogleCloudDialogflowV2beta1ImportDocumentTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentTemplate' }})
    gcs_source: Optional[googleclouddialogflowv2beta1gcssources.GoogleCloudDialogflowV2beta1GcsSources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsSource' }})
    import_gcs_custom_metadata: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importGcsCustomMetadata' }})
    

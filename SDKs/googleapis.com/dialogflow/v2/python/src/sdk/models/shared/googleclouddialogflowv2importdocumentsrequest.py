from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2importdocumenttemplate
from . import googleclouddialogflowv2gcssources


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ImportDocumentsRequest:
    document_template: Optional[googleclouddialogflowv2importdocumenttemplate.GoogleCloudDialogflowV2ImportDocumentTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentTemplate' }})
    gcs_source: Optional[googleclouddialogflowv2gcssources.GoogleCloudDialogflowV2GcsSources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsSource' }})
    import_gcs_custom_metadata: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importGcsCustomMetadata' }})
    

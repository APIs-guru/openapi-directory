from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1gcssource


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ReloadDocumentRequest:
    gcs_source: Optional[googleclouddialogflowv2beta1gcssource.GoogleCloudDialogflowV2beta1GcsSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsSource' }})
    import_gcs_custom_metadata: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importGcsCustomMetadata' }})
    

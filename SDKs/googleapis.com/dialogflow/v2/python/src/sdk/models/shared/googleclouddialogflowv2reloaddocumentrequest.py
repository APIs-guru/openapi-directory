from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ReloadDocumentRequest:
    content_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentUri' }})
    import_gcs_custom_metadata: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importGcsCustomMetadata' }})
    smart_messaging_partial_update: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smartMessagingPartialUpdate' }})
    

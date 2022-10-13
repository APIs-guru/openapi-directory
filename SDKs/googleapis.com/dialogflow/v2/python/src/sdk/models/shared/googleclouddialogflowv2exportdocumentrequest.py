from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2gcsdestination


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ExportDocumentRequest:
    export_full_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportFullContent' }})
    gcs_destination: Optional[googleclouddialogflowv2gcsdestination.GoogleCloudDialogflowV2GcsDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsDestination' }})
    smart_messaging_partial_update: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smartMessagingPartialUpdate' }})
    

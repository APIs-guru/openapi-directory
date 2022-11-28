from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ReloadDocumentRequest:
    r"""GoogleCloudDialogflowV2ReloadDocumentRequest
    Request message for Documents.ReloadDocument.
    """
    
    content_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentUri') }})
    import_gcs_custom_metadata: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importGcsCustomMetadata') }})
    smart_messaging_partial_update: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smartMessagingPartialUpdate') }})
    

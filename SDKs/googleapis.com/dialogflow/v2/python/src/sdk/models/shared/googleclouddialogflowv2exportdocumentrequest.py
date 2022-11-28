from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ExportDocumentRequest:
    r"""GoogleCloudDialogflowV2ExportDocumentRequest
    Request message for Documents.ExportDocument.
    """
    
    export_full_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportFullContent') }})
    gcs_destination: Optional[GoogleCloudDialogflowV2GcsDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsDestination') }})
    smart_messaging_partial_update: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smartMessagingPartialUpdate') }})
    

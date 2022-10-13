from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2intentbatch

class GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnum(str, Enum):
    INTENT_VIEW_UNSPECIFIED = "INTENT_VIEW_UNSPECIFIED"
    INTENT_VIEW_FULL = "INTENT_VIEW_FULL"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2BatchUpdateIntentsRequest:
    intent_batch_inline: Optional[googleclouddialogflowv2intentbatch.GoogleCloudDialogflowV2IntentBatch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentBatchInline' }})
    intent_batch_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentBatchUri' }})
    intent_view: Optional[GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentView' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    

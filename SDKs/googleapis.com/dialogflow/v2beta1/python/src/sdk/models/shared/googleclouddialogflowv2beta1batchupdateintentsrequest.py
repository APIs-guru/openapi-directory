from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1intentbatch

class GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnum(str, Enum):
    INTENT_VIEW_UNSPECIFIED = "INTENT_VIEW_UNSPECIFIED"
    INTENT_VIEW_FULL = "INTENT_VIEW_FULL"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequest:
    intent_batch_inline: Optional[googleclouddialogflowv2beta1intentbatch.GoogleCloudDialogflowV2beta1IntentBatch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentBatchInline' }})
    intent_batch_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentBatchUri' }})
    intent_view: Optional[GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentView' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnum(str, Enum):
    INTENT_VIEW_UNSPECIFIED = "INTENT_VIEW_UNSPECIFIED"
    INTENT_VIEW_FULL = "INTENT_VIEW_FULL"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestInput:
    r"""GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestInput
    The request message for Intents.BatchUpdateIntents.
    """
    
    intent_batch_inline: Optional[GoogleCloudDialogflowV2beta1IntentBatchInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentBatchInline') }})
    intent_batch_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentBatchUri') }})
    intent_view: Optional[GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentView') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    

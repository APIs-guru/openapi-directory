from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnum(str, Enum):
    RECONCILIATION_MODE_UNSPECIFIED = "RECONCILIATION_MODE_UNSPECIFIED"
    INCREMENTAL = "INCREMENTAL"
    FULL = "FULL"


@dataclass_json
@dataclass
class GoogleCloudRetailV2ImportProductsRequestInput:
    r"""GoogleCloudRetailV2ImportProductsRequestInput
    Request message for Import methods.
    """
    
    errors_config: Optional[GoogleCloudRetailV2ImportErrorsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorsConfig') }})
    input_config: Optional[GoogleCloudRetailV2ProductInputConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    notification_pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationPubsubTopic') }})
    reconciliation_mode: Optional[GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reconciliationMode') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    

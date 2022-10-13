from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2importerrorsconfig
from . import googlecloudretailv2productinputconfig

class GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnum(str, Enum):
    RECONCILIATION_MODE_UNSPECIFIED = "RECONCILIATION_MODE_UNSPECIFIED"
    INCREMENTAL = "INCREMENTAL"
    FULL = "FULL"


@dataclass_json
@dataclass
class GoogleCloudRetailV2ImportProductsRequest:
    errors_config: Optional[googlecloudretailv2importerrorsconfig.GoogleCloudRetailV2ImportErrorsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorsConfig' }})
    input_config: Optional[googlecloudretailv2productinputconfig.GoogleCloudRetailV2ProductInputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    notification_pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationPubsubTopic' }})
    reconciliation_mode: Optional[GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reconciliationMode' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    

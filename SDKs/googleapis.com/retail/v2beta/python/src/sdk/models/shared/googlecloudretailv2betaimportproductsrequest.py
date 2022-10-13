from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betaimporterrorsconfig
from . import googlecloudretailv2betaproductinputconfig

class GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum(str, Enum):
    RECONCILIATION_MODE_UNSPECIFIED = "RECONCILIATION_MODE_UNSPECIFIED"
    INCREMENTAL = "INCREMENTAL"
    FULL = "FULL"


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaImportProductsRequest:
    errors_config: Optional[googlecloudretailv2betaimporterrorsconfig.GoogleCloudRetailV2betaImportErrorsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorsConfig' }})
    input_config: Optional[googlecloudretailv2betaproductinputconfig.GoogleCloudRetailV2betaProductInputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    notification_pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationPubsubTopic' }})
    reconciliation_mode: Optional[GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reconciliationMode' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    

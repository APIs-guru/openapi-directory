from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphaimporterrorsconfig
from . import googlecloudretailv2alphaproductinputconfig

class GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum(str, Enum):
    RECONCILIATION_MODE_UNSPECIFIED = "RECONCILIATION_MODE_UNSPECIFIED"
    INCREMENTAL = "INCREMENTAL"
    FULL = "FULL"


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaImportProductsRequest:
    errors_config: Optional[googlecloudretailv2alphaimporterrorsconfig.GoogleCloudRetailV2alphaImportErrorsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorsConfig' }})
    input_config: Optional[googlecloudretailv2alphaproductinputconfig.GoogleCloudRetailV2alphaProductInputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    notification_pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationPubsubTopic' }})
    reconciliation_mode: Optional[GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reconciliationMode' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    skip_default_branch_protection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipDefaultBranchProtection' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    

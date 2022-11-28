from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudChannelV1ProvisionedService:
    r"""GoogleCloudChannelV1ProvisionedService
    Service provisioned for an entitlement.
    """
    
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    provisioning_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisioningId') }})
    sku_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skuId') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1sku
from . import googlecloudchannelv1sku
from . import googlecloudchannelv1transfereligibility


@dataclass_json
@dataclass
class GoogleCloudChannelV1TransferableSku:
    legacy_sku: Optional[googlecloudchannelv1sku.GoogleCloudChannelV1Sku] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legacySku' }})
    sku: Optional[googlecloudchannelv1sku.GoogleCloudChannelV1Sku] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    transfer_eligibility: Optional[googlecloudchannelv1transfereligibility.GoogleCloudChannelV1TransferEligibility] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferEligibility' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphamerchantcenterlink


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaMerchantCenterLinkingConfig:
    links: Optional[List[googlecloudretailv2alphamerchantcenterlink.GoogleCloudRetailV2alphaMerchantCenterLink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    

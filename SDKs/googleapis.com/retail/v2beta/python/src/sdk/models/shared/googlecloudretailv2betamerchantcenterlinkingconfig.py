from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betamerchantcenterlink


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaMerchantCenterLinkingConfig:
    links: Optional[List[googlecloudretailv2betamerchantcenterlink.GoogleCloudRetailV2betaMerchantCenterLink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    

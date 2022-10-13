from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betaservingconfig


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaListServingConfigsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    serving_configs: Optional[List[googlecloudretailv2betaservingconfig.GoogleCloudRetailV2betaServingConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servingConfigs' }})
    

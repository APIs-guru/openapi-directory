from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1repricingconfig


@dataclass_json
@dataclass
class GoogleCloudChannelV1CustomerRepricingConfig:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    repricing_config: Optional[googlecloudchannelv1repricingconfig.GoogleCloudChannelV1RepricingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repricingConfig' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    

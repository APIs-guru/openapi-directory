from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1marketinginfo


@dataclass_json
@dataclass
class GoogleCloudChannelV1Product:
    marketing_info: Optional[googlecloudchannelv1marketinginfo.GoogleCloudChannelV1MarketingInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketingInfo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

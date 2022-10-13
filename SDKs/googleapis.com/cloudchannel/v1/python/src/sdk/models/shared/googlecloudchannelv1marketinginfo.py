from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1media


@dataclass_json
@dataclass
class GoogleCloudChannelV1MarketingInfo:
    default_logo: Optional[googlecloudchannelv1media.GoogleCloudChannelV1Media] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLogo' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    

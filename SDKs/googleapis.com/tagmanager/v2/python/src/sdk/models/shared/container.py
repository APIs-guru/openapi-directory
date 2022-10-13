from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ContainerUsageContextEnum(str, Enum):
    USAGE_CONTEXT_UNSPECIFIED = "usageContextUnspecified"
    WEB = "web"
    ANDROID = "android"
    IOS = "ios"
    ANDROID_SDK5 = "androidSdk5"
    IOS_SDK5 = "iosSdk5"
    AMP = "amp"
    SERVER = "server"


@dataclass_json
@dataclass
class Container:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    container_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerId' }})
    domain_name: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    public_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicId' }})
    tag_manager_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagManagerUrl' }})
    usage_context: Optional[List[ContainerUsageContextEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usageContext' }})
    

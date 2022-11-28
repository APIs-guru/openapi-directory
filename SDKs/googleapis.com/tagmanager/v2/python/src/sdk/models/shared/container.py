from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Container
    Represents a Google Tag Manager Container, which specifies the platform tags will run on, manages workspaces, and retains container versions.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    container_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerId') }})
    domain_name: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    features: Optional[ContainerFeatures] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    public_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicId') }})
    tag_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagIds') }})
    tag_manager_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagManagerUrl') }})
    tagging_server_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taggingServerUrls') }})
    usage_context: Optional[List[ContainerUsageContextEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageContext') }})
    

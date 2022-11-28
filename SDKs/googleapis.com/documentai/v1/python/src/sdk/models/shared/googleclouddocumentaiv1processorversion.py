from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDocumentaiV1ProcessorVersionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DEPLOYED = "DEPLOYED"
    DEPLOYING = "DEPLOYING"
    UNDEPLOYED = "UNDEPLOYED"
    UNDEPLOYING = "UNDEPLOYING"
    CREATING = "CREATING"
    DELETING = "DELETING"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1ProcessorVersion:
    r"""GoogleCloudDocumentaiV1ProcessorVersion
    A processor version is an implementation of a processor. Each processor can have multiple versions, pre-trained by Google internally or up-trained by the customer. At a time, a processor can only have one default version version. So the processor's behavior (when processing documents) is defined by a default version
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    deprecation_info: Optional[GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecationInfo') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    document_schema: Optional[GoogleCloudDocumentaiV1DocumentSchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentSchema') }})
    google_managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleManaged') }})
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyName') }})
    kms_key_version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyVersionName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[GoogleCloudDocumentaiV1ProcessorVersionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3processorversiondeprecationinfo

class GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum(str, Enum):
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
class GoogleCloudDocumentaiV1beta3ProcessorVersion:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    deprecation_info: Optional[googleclouddocumentaiv1beta3processorversiondeprecationinfo.GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecationInfo' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    google_managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleManaged' }})
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyName' }})
    kms_key_version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyVersionName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrunv2container
from . import googlecloudrunv2revisionscaling
from . import googlecloudrunv2volume
from . import googlecloudrunv2vpcaccess

class GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum(str, Enum):
    EXECUTION_ENVIRONMENT_UNSPECIFIED = "EXECUTION_ENVIRONMENT_UNSPECIFIED"
    EXECUTION_ENVIRONMENT_GEN1 = "EXECUTION_ENVIRONMENT_GEN1"
    EXECUTION_ENVIRONMENT_GEN2 = "EXECUTION_ENVIRONMENT_GEN2"


@dataclass_json
@dataclass
class GoogleCloudRunV2RevisionTemplate:
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    containers: Optional[List[googlecloudrunv2container.GoogleCloudRunV2Container]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containers' }})
    encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionKey' }})
    execution_environment: Optional[GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionEnvironment' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    max_instance_request_concurrency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxInstanceRequestConcurrency' }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    scaling: Optional[googlecloudrunv2revisionscaling.GoogleCloudRunV2RevisionScaling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaling' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    volumes: Optional[List[googlecloudrunv2volume.GoogleCloudRunV2Volume]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    vpc_access: Optional[googlecloudrunv2vpcaccess.GoogleCloudRunV2VpcAccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcAccess' }})
    

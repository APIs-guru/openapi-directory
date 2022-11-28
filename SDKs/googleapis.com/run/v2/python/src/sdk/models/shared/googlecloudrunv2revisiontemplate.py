from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum(str, Enum):
    EXECUTION_ENVIRONMENT_UNSPECIFIED = "EXECUTION_ENVIRONMENT_UNSPECIFIED"
    EXECUTION_ENVIRONMENT_GEN1 = "EXECUTION_ENVIRONMENT_GEN1"
    EXECUTION_ENVIRONMENT_GEN2 = "EXECUTION_ENVIRONMENT_GEN2"


@dataclass_json
@dataclass
class GoogleCloudRunV2RevisionTemplate:
    r"""GoogleCloudRunV2RevisionTemplate
    RevisionTemplate describes the data a revision should have when created from a template.
    """
    
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    containers: Optional[List[GoogleCloudRunV2Container]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containers') }})
    encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionKey') }})
    execution_environment: Optional[GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionEnvironment') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    max_instance_request_concurrency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxInstanceRequestConcurrency') }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    scaling: Optional[GoogleCloudRunV2RevisionScaling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaling') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    volumes: Optional[List[GoogleCloudRunV2Volume]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    vpc_access: Optional[GoogleCloudRunV2VpcAccess] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcAccess') }})
    

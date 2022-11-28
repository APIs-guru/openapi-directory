from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContainerSpec:
    r"""ContainerSpec
    Container Spec.
    """
    
    default_environment: Optional[FlexTemplateRuntimeEnvironment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultEnvironment') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    image_repository_cert_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageRepositoryCertPath') }})
    image_repository_password_secret_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageRepositoryPasswordSecretId') }})
    image_repository_username_secret_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageRepositoryUsernameSecretId') }})
    metadata: Optional[TemplateMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    sdk_info: Optional[SDKInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdkInfo') }})
    

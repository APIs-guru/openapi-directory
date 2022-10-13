from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import flextemplateruntimeenvironment
from . import templatemetadata
from . import sdkinfo


@dataclass_json
@dataclass
class ContainerSpec:
    default_environment: Optional[flextemplateruntimeenvironment.FlexTemplateRuntimeEnvironment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultEnvironment' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    image_repository_cert_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageRepositoryCertPath' }})
    image_repository_password_secret_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageRepositoryPasswordSecretId' }})
    image_repository_username_secret_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageRepositoryUsernameSecretId' }})
    metadata: Optional[templatemetadata.TemplateMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    sdk_info: Optional[sdkinfo.SdkInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sdkInfo' }})
    

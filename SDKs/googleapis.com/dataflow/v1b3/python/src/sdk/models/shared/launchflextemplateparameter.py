from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import containerspec
from . import flextemplateruntimeenvironment


@dataclass_json
@dataclass
class LaunchFlexTemplateParameter:
    container_spec: Optional[containerspec.ContainerSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerSpec' }})
    container_spec_gcs_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerSpecGcsPath' }})
    environment: Optional[flextemplateruntimeenvironment.FlexTemplateRuntimeEnvironment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobName' }})
    launch_options: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchOptions' }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    transform_name_mappings: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transformNameMappings' }})
    update: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update' }})
    

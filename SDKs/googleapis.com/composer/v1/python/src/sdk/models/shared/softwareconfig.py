from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SoftwareConfig:
    airflow_config_overrides: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'airflowConfigOverrides' }})
    env_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envVariables' }})
    image_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageVersion' }})
    pypi_packages: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pypiPackages' }})
    python_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pythonVersion' }})
    scheduler_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedulerCount' }})
    

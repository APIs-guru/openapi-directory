from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SoftwareConfig:
    r"""SoftwareConfig
    Specifies the selection and configuration of software inside the environment.
    """
    
    airflow_config_overrides: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('airflowConfigOverrides') }})
    env_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envVariables') }})
    image_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageVersion') }})
    pypi_packages: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pypiPackages') }})
    python_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pythonVersion') }})
    scheduler_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedulerCount') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LoadSnapshotRequest:
    r"""LoadSnapshotRequest
    Request to load a snapshot into a Cloud Composer environment.
    """
    
    skip_airflow_overrides_setting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipAirflowOverridesSetting') }})
    skip_environment_variables_setting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipEnvironmentVariablesSetting') }})
    skip_gcs_data_copying: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipGcsDataCopying') }})
    skip_pypi_packages_installation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipPypiPackagesInstallation') }})
    snapshot_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotPath') }})
    

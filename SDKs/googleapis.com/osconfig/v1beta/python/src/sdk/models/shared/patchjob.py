from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PatchJobStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    STARTED = "STARTED"
    INSTANCE_LOOKUP = "INSTANCE_LOOKUP"
    PATCHING = "PATCHING"
    SUCCEEDED = "SUCCEEDED"
    COMPLETED_WITH_ERRORS = "COMPLETED_WITH_ERRORS"
    CANCELED = "CANCELED"
    TIMED_OUT = "TIMED_OUT"


@dataclass_json
@dataclass
class PatchJob:
    r"""PatchJob
    A high level representation of a patch job that is either in progress or has completed. Instance details are not included in the job. To paginate through instance details, use `ListPatchJobInstanceDetails`. For more information about patch jobs, see [Creating patch jobs](https://cloud.google.com/compute/docs/os-patch-management/create-patch-job).
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dryRun') }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    instance_details_summary: Optional[PatchJobInstanceDetailsSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceDetailsSummary') }})
    instance_filter: Optional[PatchInstanceFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceFilter') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    patch_config: Optional[PatchConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patchConfig') }})
    patch_deployment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patchDeployment') }})
    percent_complete: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentComplete') }})
    rollout: Optional[PatchRollout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollout') }})
    state: Optional[PatchJobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

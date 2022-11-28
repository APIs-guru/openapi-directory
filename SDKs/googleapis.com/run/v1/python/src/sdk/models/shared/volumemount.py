from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VolumeMount:
    r"""VolumeMount
    VolumeMount describes a mounting of a Volume within a container.
    """
    
    mount_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountPath') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readOnly') }})
    sub_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subPath') }})
    

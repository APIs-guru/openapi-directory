from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PatchInstanceFilterGroupLabel:
    r"""PatchInstanceFilterGroupLabel
    Targets a group of VM instances by using their [assigned labels](https://cloud.google.com/compute/docs/labeling-resources). Labels are key-value pairs. A `GroupLabel` is a combination of labels that is used to target VMs for a patch job. For example, a patch job can target VMs that have the following `GroupLabel`: `{\"env\":\"test\", \"app\":\"web\"}`. This means that the patch job is applied to VMs that have both the labels `env=test` and `app=web`.
    """
    
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    

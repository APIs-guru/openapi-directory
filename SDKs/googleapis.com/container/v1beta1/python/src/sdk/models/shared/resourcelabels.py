from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResourceLabels:
    r"""ResourceLabels
    Collection of [GCP labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels).
    """
    
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    

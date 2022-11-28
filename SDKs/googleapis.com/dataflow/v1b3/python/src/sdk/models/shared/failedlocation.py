from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FailedLocation:
    r"""FailedLocation
    Indicates which [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) failed to respond to a request for data.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRetailV2Interval:
    r"""GoogleCloudRetailV2Interval
    A floating point interval.
    """
    
    exclusive_maximum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusiveMaximum') }})
    exclusive_minimum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusiveMinimum') }})
    maximum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximum') }})
    minimum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo:
    r"""GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo
    DoubleFieldInfo defines output for any double type field.
    """
    
    average: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('average') }})
    max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    min: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min') }})
    quartiles: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quartiles') }})
    standard_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardDeviation') }})
    

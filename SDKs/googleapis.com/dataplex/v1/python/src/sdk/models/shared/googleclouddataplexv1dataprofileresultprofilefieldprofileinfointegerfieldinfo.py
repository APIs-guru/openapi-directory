from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo:
    r"""GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo
    IntegerFieldInfo defines output for any integer type field.
    """
    
    average: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('average') }})
    max: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    min: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min') }})
    quartiles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quartiles') }})
    standard_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardDeviation') }})
    

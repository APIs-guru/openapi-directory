from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1alpha1DimensionValue:
    r"""GooglePlayDeveloperReportingV1alpha1DimensionValue
    Represents the value of a single dimension.
    """
    
    dimension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension') }})
    int64_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('int64Value') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    value_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueLabel') }})
    

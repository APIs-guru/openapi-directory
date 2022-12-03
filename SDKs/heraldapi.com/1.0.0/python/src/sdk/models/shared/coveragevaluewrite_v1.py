from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CoverageValueWriteV1:
    r"""CoverageValueWriteV1
    Coverage values assign specific values to coverage parameters.
    """
    
    coverage_parameter_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverage_parameter_id') }})
    value: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    child_coverage_values: Optional[list[CoverageValueWriteV1]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('child_coverage_values') }})
    

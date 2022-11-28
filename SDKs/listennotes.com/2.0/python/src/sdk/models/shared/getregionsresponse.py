from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetRegionsResponse:
    regions: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    

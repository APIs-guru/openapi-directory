from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProductStatusDataQualityIssue:
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    fetch_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fetchStatus') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    severity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    value_on_landing_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueOnLandingPage') }})
    value_provided: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueProvided') }})
    

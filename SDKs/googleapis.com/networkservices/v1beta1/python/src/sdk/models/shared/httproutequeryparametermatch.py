from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HTTPRouteQueryParameterMatch:
    r"""HTTPRouteQueryParameterMatch
    Specifications to match a query parameter in the request.
    """
    
    exact_match: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exactMatch') }})
    present_match: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presentMatch') }})
    query_parameter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryParameter') }})
    regex_match: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regexMatch') }})
    

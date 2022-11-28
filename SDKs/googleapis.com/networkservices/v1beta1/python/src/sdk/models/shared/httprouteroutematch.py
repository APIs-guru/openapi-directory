from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HTTPRouteRouteMatch:
    r"""HTTPRouteRouteMatch
    RouteMatch defines specifications used to match requests. If multiple match types are set, this RouteMatch will match if ALL type of matches are matched.
    """
    
    full_path_match: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullPathMatch') }})
    headers: Optional[List[HTTPRouteHeaderMatch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    ignore_case: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreCase') }})
    prefix_match: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefixMatch') }})
    query_parameters: Optional[List[HTTPRouteQueryParameterMatch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryParameters') }})
    regex_match: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regexMatch') }})
    

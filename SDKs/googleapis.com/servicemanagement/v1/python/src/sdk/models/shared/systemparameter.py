from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SystemParameter:
    r"""SystemParameter
    Define a parameter's name and location. The parameter may be passed as either an HTTP header or a URL query parameter, and if both are passed the behavior is implementation-dependent.
    """
    
    http_header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpHeader') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url_query_parameter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlQueryParameter') }})
    

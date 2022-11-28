from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RdapResponse:
    r"""RdapResponse
    Response to a general RDAP query.
    """
    
    description: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    error_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    json_response: Optional[HTTPBody] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonResponse') }})
    lang: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lang') }})
    notices: Optional[List[Notice]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notices') }})
    rdap_conformance: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rdapConformance') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

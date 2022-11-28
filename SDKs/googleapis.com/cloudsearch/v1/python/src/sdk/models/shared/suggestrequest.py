from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SuggestRequest:
    r"""SuggestRequest
    Request of suggest API.
    """
    
    data_source_restrictions: Optional[List[DataSourceRestriction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceRestrictions') }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    request_options: Optional[RequestOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestOptions') }})
    

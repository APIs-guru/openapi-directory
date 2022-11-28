from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListSQLIntegrationsResponse:
    r"""ListSQLIntegrationsResponse
    ListSQLIntegrationsResponse is the response message for ListSQLIntegrations method.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    sql_integrations: Optional[List[SQLIntegration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqlIntegrations') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    

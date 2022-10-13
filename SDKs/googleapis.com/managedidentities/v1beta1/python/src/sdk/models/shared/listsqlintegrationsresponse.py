from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sqlintegration


@dataclass_json
@dataclass
class ListSQLIntegrationsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    sql_integrations: Optional[List[sqlintegration.SQLIntegration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sqlIntegrations' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    

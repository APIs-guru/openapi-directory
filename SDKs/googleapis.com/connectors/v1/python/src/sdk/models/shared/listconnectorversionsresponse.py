from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import connectorversion


@dataclass_json
@dataclass
class ListConnectorVersionsResponse:
    connector_versions: Optional[List[connectorversion.ConnectorVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorVersions' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userdatamapping


@dataclass_json
@dataclass
class ListUserDataMappingsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    user_data_mappings: Optional[List[userdatamapping.UserDataMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userDataMappings' }})
    

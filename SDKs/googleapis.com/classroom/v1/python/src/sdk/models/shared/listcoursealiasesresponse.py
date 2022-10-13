from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import coursealias


@dataclass_json
@dataclass
class ListCourseAliasesResponse:
    aliases: Optional[List[coursealias.CourseAlias]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aliases' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

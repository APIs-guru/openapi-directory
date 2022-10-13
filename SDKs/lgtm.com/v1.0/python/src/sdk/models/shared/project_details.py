from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import project_language_stats


@dataclass_json
@dataclass
class ProjectDetails:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    languages: Optional[List[project_language_stats.ProjectLanguageStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languages' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    url_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url-identifier' }})
    

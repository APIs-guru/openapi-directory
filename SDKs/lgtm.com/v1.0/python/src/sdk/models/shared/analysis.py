from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import language_stats
from . import project


@dataclass_json
@dataclass
class Analysis:
    commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit-id' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    languages: Optional[List[language_stats.LanguageStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languages' }})
    log_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'log-url' }})
    project: Optional[project.Project] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    results_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results-url' }})
    

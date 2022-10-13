from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jobtemplate


@dataclass_json
@dataclass
class ListJobTemplatesResponse:
    job_templates: Optional[List[jobtemplate.JobTemplate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobTemplates' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    

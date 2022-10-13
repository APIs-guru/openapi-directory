from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import commuteinfo
from . import job


@dataclass_json
@dataclass
class MatchingJob:
    commute_info: Optional[commuteinfo.CommuteInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commuteInfo' }})
    job: Optional[job.Job] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'job' }})
    job_summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobSummary' }})
    job_title_snippet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobTitleSnippet' }})
    search_text_snippet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchTextSnippet' }})
    

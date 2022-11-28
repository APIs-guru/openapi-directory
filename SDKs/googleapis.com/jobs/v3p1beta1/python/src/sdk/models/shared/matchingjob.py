from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MatchingJob:
    r"""MatchingJob
    Output only. Job entry with metadata inside SearchJobsResponse.
    """
    
    commute_info: Optional[CommuteInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commuteInfo') }})
    job: Optional[Job] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('job') }})
    job_summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobSummary') }})
    job_title_snippet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobTitleSnippet') }})
    search_text_snippet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchTextSnippet') }})
    

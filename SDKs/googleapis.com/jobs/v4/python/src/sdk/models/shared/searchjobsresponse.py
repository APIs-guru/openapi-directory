from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchJobsResponse:
    r"""SearchJobsResponse
    Response for SearchJob method.
    """
    
    broadened_query_jobs_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('broadenedQueryJobsCount') }})
    histogram_query_results: Optional[List[HistogramQueryResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('histogramQueryResults') }})
    location_filters: Optional[List[Location]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationFilters') }})
    matching_jobs: Optional[List[MatchingJob]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchingJobs') }})
    metadata: Optional[ResponseMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    spell_correction: Optional[SpellingCorrection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spellCorrection') }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    

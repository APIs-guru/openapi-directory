from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchJobsResponse:
    r"""SearchJobsResponse
    Output only. Response for SearchJob method.
    """
    
    broadened_query_jobs_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('broadenedQueryJobsCount') }})
    estimated_total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedTotalSize') }})
    histogram_results: Optional[HistogramResults] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('histogramResults') }})
    location_filters: Optional[List[Location]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationFilters') }})
    matching_jobs: Optional[List[MatchingJob]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchingJobs') }})
    metadata: Optional[ResponseMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    spell_correction: Optional[SpellingCorrection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spellCorrection') }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    

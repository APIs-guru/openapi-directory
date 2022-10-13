from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import histogramresults
from . import location
from . import matchingjob
from . import responsemetadata
from . import spellingcorrection


@dataclass_json
@dataclass
class SearchJobsResponse:
    broadened_query_jobs_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'broadenedQueryJobsCount' }})
    estimated_total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedTotalSize' }})
    histogram_results: Optional[histogramresults.HistogramResults] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'histogramResults' }})
    location_filters: Optional[List[location.Location]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationFilters' }})
    matching_jobs: Optional[List[matchingjob.MatchingJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchingJobs' }})
    metadata: Optional[responsemetadata.ResponseMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    spell_correction: Optional[spellingcorrection.SpellingCorrection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spellCorrection' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    

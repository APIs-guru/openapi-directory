from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HistogramResults:
    r"""HistogramResults
    Output only. Histogram results that match HistogramFacets specified in SearchJobsRequest.
    """
    
    compensation_histogram_results: Optional[List[CompensationHistogramResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compensationHistogramResults') }})
    custom_attribute_histogram_results: Optional[List[CustomAttributeHistogramResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customAttributeHistogramResults') }})
    simple_histogram_results: Optional[List[HistogramResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simpleHistogramResults') }})
    

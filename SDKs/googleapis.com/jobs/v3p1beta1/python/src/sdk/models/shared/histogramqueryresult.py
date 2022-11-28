from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HistogramQueryResult:
    r"""HistogramQueryResult
    Output only. Histogram result that matches HistogramSpec specified in searches.
    """
    
    histogram: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('histogram') }})
    histogram_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('histogramQuery') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1UsageStats:
    r"""GoogleCloudDatacatalogV1beta1UsageStats
    Detailed counts on the entry's usage. Caveats: - Only BigQuery tables have usage stats - The usage stats only include BigQuery query jobs - The usage stats might be underestimated, e.g. wildcard table references are not yet counted in usage computation https://cloud.google.com/bigquery/docs/querying-wildcard-tables
    """
    
    total_cancellations: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCancellations') }})
    total_completions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCompletions') }})
    total_execution_time_for_completions_millis: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalExecutionTimeForCompletionsMillis') }})
    total_failures: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalFailures') }})
    

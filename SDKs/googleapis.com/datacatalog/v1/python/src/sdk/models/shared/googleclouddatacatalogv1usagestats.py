from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1UsageStats:
    r"""GoogleCloudDatacatalogV1UsageStats
    Detailed statistics on the entry's usage. Usage statistics have the following limitations: - Only BigQuery tables have them. - They only include BigQuery query jobs. - They might be underestimated because wildcard table references are not yet counted. For more information, see [Querying multiple tables using a wildcard table] (https://cloud.google.com/bigquery/docs/querying-wildcard-tables)
    """
    
    total_cancellations: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCancellations') }})
    total_completions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCompletions') }})
    total_execution_time_for_completions_millis: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalExecutionTimeForCompletionsMillis') }})
    total_failures: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalFailures') }})
    

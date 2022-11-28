from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudMlV1RequestLoggingConfig:
    r"""GoogleCloudMlV1RequestLoggingConfig
    Configuration for logging request-response pairs to a BigQuery table. Online prediction requests to a model version and the responses to these requests are converted to raw strings and saved to the specified BigQuery table. Logging is constrained by [BigQuery quotas and limits](/bigquery/quotas). If your project exceeds BigQuery quotas or limits, AI Platform Prediction does not log request-response pairs, but it continues to serve predictions. If you are using [continuous evaluation](/ml-engine/docs/continuous-evaluation/), you do not need to specify this configuration manually. Setting up continuous evaluation automatically enables logging of request-response pairs.
    """
    
    bigquery_table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryTableName') }})
    sampling_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samplingPercentage') }})
    

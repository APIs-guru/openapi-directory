from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InsightsConfig:
    r"""InsightsConfig
    Insights configuration. This specifies when Cloud SQL Insights feature is enabled and optional configuration.
    """
    
    query_insights_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryInsightsEnabled') }})
    query_plans_per_minute: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryPlansPerMinute') }})
    query_string_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryStringLength') }})
    record_application_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordApplicationTags') }})
    record_client_address: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordClientAddress') }})
    

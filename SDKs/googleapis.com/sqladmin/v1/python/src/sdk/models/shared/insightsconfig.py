from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InsightsConfig:
    query_insights_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryInsightsEnabled' }})
    query_plans_per_minute: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryPlansPerMinute' }})
    query_string_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryStringLength' }})
    record_application_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordApplicationTags' }})
    record_client_address: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordClientAddress' }})
    

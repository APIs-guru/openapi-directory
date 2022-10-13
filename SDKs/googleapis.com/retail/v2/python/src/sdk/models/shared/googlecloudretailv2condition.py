from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2conditiontimerange
from . import googlecloudretailv2conditionqueryterm


@dataclass_json
@dataclass
class GoogleCloudRetailV2Condition:
    active_time_range: Optional[List[googlecloudretailv2conditiontimerange.GoogleCloudRetailV2ConditionTimeRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeTimeRange' }})
    query_terms: Optional[List[googlecloudretailv2conditionqueryterm.GoogleCloudRetailV2ConditionQueryTerm]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryTerms' }})
    

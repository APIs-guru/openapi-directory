from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betaconditiontimerange
from . import googlecloudretailv2betaconditionqueryterm


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaCondition:
    active_time_range: Optional[List[googlecloudretailv2betaconditiontimerange.GoogleCloudRetailV2betaConditionTimeRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeTimeRange' }})
    query_terms: Optional[List[googlecloudretailv2betaconditionqueryterm.GoogleCloudRetailV2betaConditionQueryTerm]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryTerms' }})
    

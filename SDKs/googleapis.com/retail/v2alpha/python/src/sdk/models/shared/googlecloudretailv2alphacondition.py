from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphaconditiontimerange
from . import googlecloudretailv2alphaconditionqueryterm


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaCondition:
    active_time_range: Optional[List[googlecloudretailv2alphaconditiontimerange.GoogleCloudRetailV2alphaConditionTimeRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeTimeRange' }})
    query_terms: Optional[List[googlecloudretailv2alphaconditionqueryterm.GoogleCloudRetailV2alphaConditionQueryTerm]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryTerms' }})
    

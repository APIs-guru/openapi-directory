from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleplaydeveloperreportingv1beta1freshnessinfofreshness


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1beta1FreshnessInfo:
    freshnesses: Optional[List[googleplaydeveloperreportingv1beta1freshnessinfofreshness.GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freshnesses' }})
    

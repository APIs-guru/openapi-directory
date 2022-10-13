from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleplaydeveloperreportingv1alpha1freshnessinfofreshness


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1alpha1FreshnessInfo:
    freshnesses: Optional[List[googleplaydeveloperreportingv1alpha1freshnessinfofreshness.GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freshnesses' }})
    

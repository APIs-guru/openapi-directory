from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleplaydeveloperreportingv1beta1freshnessinfo


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet:
    freshness_info: Optional[googleplaydeveloperreportingv1beta1freshnessinfo.GooglePlayDeveloperReportingV1beta1FreshnessInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freshnessInfo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

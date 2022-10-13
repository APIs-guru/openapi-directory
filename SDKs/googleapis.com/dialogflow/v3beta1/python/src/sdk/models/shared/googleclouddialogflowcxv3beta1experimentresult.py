from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1experimentresultversionmetrics


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ExperimentResult:
    last_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime' }})
    version_metrics: Optional[List[googleclouddialogflowcxv3beta1experimentresultversionmetrics.GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionMetrics' }})
    

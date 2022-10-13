from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3experimentresultversionmetrics


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ExperimentResult:
    last_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime' }})
    version_metrics: Optional[List[googleclouddialogflowcxv3experimentresultversionmetrics.GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionMetrics' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3experimentresultmetric


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics:
    metrics: Optional[List[googleclouddialogflowcxv3experimentresultmetric.GoogleCloudDialogflowCxV3ExperimentResultMetric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    session_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionCount' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

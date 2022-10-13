from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2smartreplymetricstopnmetrics


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SmartReplyMetrics:
    allowlist_coverage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowlistCoverage' }})
    conversation_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationCount' }})
    top_n_metrics: Optional[List[googleclouddialogflowv2smartreplymetricstopnmetrics.GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topNMetrics' }})
    

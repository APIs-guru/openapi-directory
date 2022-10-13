from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2evaluationconfig
from . import googleclouddialogflowv2smartreplymetrics


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ConversationModelEvaluation:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    evaluation_config: Optional[googleclouddialogflowv2evaluationconfig.GoogleCloudDialogflowV2EvaluationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    smart_reply_metrics: Optional[googleclouddialogflowv2smartreplymetrics.GoogleCloudDialogflowV2SmartReplyMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smartReplyMetrics' }})
    

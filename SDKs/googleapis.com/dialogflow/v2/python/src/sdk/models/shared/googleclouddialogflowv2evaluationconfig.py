from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2inputdataset
from . import googleclouddialogflowv2evaluationconfigsmartcomposeconfig
from . import googleclouddialogflowv2evaluationconfigsmartreplyconfig


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2EvaluationConfig:
    datasets: Optional[List[googleclouddialogflowv2inputdataset.GoogleCloudDialogflowV2InputDataset]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasets' }})
    smart_compose_config: Optional[googleclouddialogflowv2evaluationconfigsmartcomposeconfig.GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smartComposeConfig' }})
    smart_reply_config: Optional[googleclouddialogflowv2evaluationconfigsmartreplyconfig.GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smartReplyConfig' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2conversationinfo
from . import googleclouddialogflowv2inputconfig


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ConversationDataset:
    conversation_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationCount' }})
    conversation_info: Optional[googleclouddialogflowv2conversationinfo.GoogleCloudDialogflowV2ConversationInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationInfo' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    input_config: Optional[googleclouddialogflowv2inputconfig.GoogleCloudDialogflowV2InputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

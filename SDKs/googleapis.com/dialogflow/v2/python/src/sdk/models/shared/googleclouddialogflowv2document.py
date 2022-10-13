from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2documentreloadstatus

class GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum(str, Enum):
    KNOWLEDGE_TYPE_UNSPECIFIED = "KNOWLEDGE_TYPE_UNSPECIFIED"
    FAQ = "FAQ"
    EXTRACTIVE_QA = "EXTRACTIVE_QA"
    ARTICLE_SUGGESTION = "ARTICLE_SUGGESTION"
    AGENT_FACING_SMART_REPLY = "AGENT_FACING_SMART_REPLY"

class GoogleCloudDialogflowV2DocumentStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"
    RELOADING = "RELOADING"
    DELETING = "DELETING"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2Document:
    content_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentUri' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    enable_auto_reload: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableAutoReload' }})
    knowledge_types: Optional[List[GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'knowledgeTypes' }})
    latest_reload_status: Optional[googleclouddialogflowv2documentreloadstatus.GoogleCloudDialogflowV2DocumentReloadStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestReloadStatus' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    raw_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rawContent' }})
    state: Optional[GoogleCloudDialogflowV2DocumentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

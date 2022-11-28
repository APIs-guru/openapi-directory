from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum(str, Enum):
    KNOWLEDGE_TYPE_UNSPECIFIED = "KNOWLEDGE_TYPE_UNSPECIFIED"
    FAQ = "FAQ"
    EXTRACTIVE_QA = "EXTRACTIVE_QA"
    ARTICLE_SUGGESTION = "ARTICLE_SUGGESTION"
    AGENT_FACING_SMART_REPLY = "AGENT_FACING_SMART_REPLY"
    SMART_REPLY = "SMART_REPLY"

class GoogleCloudDialogflowV2beta1DocumentStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"
    RELOADING = "RELOADING"
    DELETING = "DELETING"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1DocumentInput:
    r"""GoogleCloudDialogflowV2beta1DocumentInput
    A knowledge document to be used by a KnowledgeBase. For more information, see the [knowledge base guide](https://cloud.google.com/dialogflow/docs/how/knowledge-bases). Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
    """
    
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    content_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentUri') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enable_auto_reload: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAutoReload') }})
    knowledge_types: Optional[List[GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('knowledgeTypes') }})
    latest_reload_status: Optional[GoogleCloudDialogflowV2beta1DocumentReloadStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestReloadStatus') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    raw_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawContent') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1Document:
    r"""GoogleCloudDialogflowV2beta1Document
    A knowledge document to be used by a KnowledgeBase. For more information, see the [knowledge base guide](https://cloud.google.com/dialogflow/docs/how/knowledge-bases). Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
    """
    
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    content_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentUri') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enable_auto_reload: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAutoReload') }})
    knowledge_types: Optional[List[GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('knowledgeTypes') }})
    latest_reload_status: Optional[GoogleCloudDialogflowV2beta1DocumentReloadStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestReloadStatus') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    raw_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawContent') }})
    state: Optional[GoogleCloudDialogflowV2beta1DocumentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

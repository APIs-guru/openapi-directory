from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnum(str, Enum):
    KNOWLEDGE_TYPE_UNSPECIFIED = "KNOWLEDGE_TYPE_UNSPECIFIED"
    FAQ = "FAQ"
    EXTRACTIVE_QA = "EXTRACTIVE_QA"
    ARTICLE_SUGGESTION = "ARTICLE_SUGGESTION"
    AGENT_FACING_SMART_REPLY = "AGENT_FACING_SMART_REPLY"
    SMART_REPLY = "SMART_REPLY"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ImportDocumentTemplate:
    r"""GoogleCloudDialogflowV2beta1ImportDocumentTemplate
    The template used for importing documents.
    """
    
    knowledge_types: Optional[List[GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('knowledgeTypes') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    

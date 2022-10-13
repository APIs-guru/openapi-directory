from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2knowledgebase


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ListKnowledgeBasesResponse:
    knowledge_bases: Optional[List[googleclouddialogflowv2knowledgebase.GoogleCloudDialogflowV2KnowledgeBase]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'knowledgeBases' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

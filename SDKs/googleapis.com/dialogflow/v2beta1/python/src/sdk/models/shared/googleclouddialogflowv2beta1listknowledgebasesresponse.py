from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1knowledgebase


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse:
    knowledge_bases: Optional[List[googleclouddialogflowv2beta1knowledgebase.GoogleCloudDialogflowV2beta1KnowledgeBase]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'knowledgeBases' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

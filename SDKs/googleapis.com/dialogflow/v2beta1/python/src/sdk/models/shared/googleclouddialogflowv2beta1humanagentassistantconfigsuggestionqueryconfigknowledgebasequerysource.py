from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource:
    knowledge_bases: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'knowledgeBases' }})
    

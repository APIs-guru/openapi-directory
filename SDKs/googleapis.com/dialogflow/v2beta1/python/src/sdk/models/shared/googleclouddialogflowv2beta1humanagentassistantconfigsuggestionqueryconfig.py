from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig:
    r"""GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig
    Config for suggestion query.
    """
    
    confidence_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidenceThreshold') }})
    context_filter_settings: Optional[GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contextFilterSettings') }})
    dialogflow_query_source: Optional[GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogflowQuerySource') }})
    document_query_source: Optional[GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentQuerySource') }})
    knowledge_base_query_source: Optional[GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('knowledgeBaseQuerySource') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    

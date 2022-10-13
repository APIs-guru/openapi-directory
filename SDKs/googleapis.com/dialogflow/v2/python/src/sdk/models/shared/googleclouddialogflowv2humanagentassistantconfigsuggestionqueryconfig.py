from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2humanagentassistantconfigsuggestionqueryconfigcontextfiltersettings
from . import googleclouddialogflowv2humanagentassistantconfigsuggestionqueryconfigdialogflowquerysource
from . import googleclouddialogflowv2humanagentassistantconfigsuggestionqueryconfigdocumentquerysource
from . import googleclouddialogflowv2humanagentassistantconfigsuggestionqueryconfigknowledgebasequerysource


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig:
    confidence_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidenceThreshold' }})
    context_filter_settings: Optional[googleclouddialogflowv2humanagentassistantconfigsuggestionqueryconfigcontextfiltersettings.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contextFilterSettings' }})
    dialogflow_query_source: Optional[googleclouddialogflowv2humanagentassistantconfigsuggestionqueryconfigdialogflowquerysource.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dialogflowQuerySource' }})
    document_query_source: Optional[googleclouddialogflowv2humanagentassistantconfigsuggestionqueryconfigdocumentquerysource.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentQuerySource' }})
    knowledge_base_query_source: Optional[googleclouddialogflowv2humanagentassistantconfigsuggestionqueryconfigknowledgebasequerysource.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'knowledgeBaseQuerySource' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1humanagentassistantconfigsuggestionqueryconfigcontextfiltersettings
from . import googleclouddialogflowv2beta1humanagentassistantconfigsuggestionqueryconfigdialogflowquerysource
from . import googleclouddialogflowv2beta1humanagentassistantconfigsuggestionqueryconfigdocumentquerysource
from . import googleclouddialogflowv2beta1humanagentassistantconfigsuggestionqueryconfigknowledgebasequerysource


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig:
    confidence_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidenceThreshold' }})
    context_filter_settings: Optional[googleclouddialogflowv2beta1humanagentassistantconfigsuggestionqueryconfigcontextfiltersettings.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contextFilterSettings' }})
    dialogflow_query_source: Optional[googleclouddialogflowv2beta1humanagentassistantconfigsuggestionqueryconfigdialogflowquerysource.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dialogflowQuerySource' }})
    document_query_source: Optional[googleclouddialogflowv2beta1humanagentassistantconfigsuggestionqueryconfigdocumentquerysource.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentQuerySource' }})
    knowledge_base_query_source: Optional[googleclouddialogflowv2beta1humanagentassistantconfigsuggestionqueryconfigknowledgebasequerysource.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'knowledgeBaseQuerySource' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    

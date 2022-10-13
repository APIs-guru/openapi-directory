from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigMessageAnalysisConfig:
    enable_entity_extraction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableEntityExtraction' }})
    enable_sentiment_analysis: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableSentimentAnalysis' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigMessageAnalysisConfig:
    r"""GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigMessageAnalysisConfig
    Configuration for analyses to run on each conversation message.
    """
    
    enable_entity_extraction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableEntityExtraction') }})
    enable_sentiment_analysis: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableSentimentAnalysis') }})
    

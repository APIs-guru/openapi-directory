from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1sentiment


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1SentimentAnalysisResult:
    query_text_sentiment: Optional[googleclouddialogflowv2beta1sentiment.GoogleCloudDialogflowV2beta1Sentiment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryTextSentiment' }})
    

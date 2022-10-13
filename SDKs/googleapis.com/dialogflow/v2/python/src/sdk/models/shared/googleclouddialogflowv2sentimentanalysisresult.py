from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2sentiment


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SentimentAnalysisResult:
    query_text_sentiment: Optional[googleclouddialogflowv2sentiment.GoogleCloudDialogflowV2Sentiment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryTextSentiment' }})
    

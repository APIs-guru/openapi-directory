from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig:
    analyze_query_text_sentiment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analyzeQueryTextSentiment' }})
    

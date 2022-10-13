from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1SentimentConfig:
    enable_label_sentiment_selection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableLabelSentimentSelection' }})
    

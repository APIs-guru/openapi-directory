from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1sentimentconfig


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1TextClassificationConfig:
    allow_multi_label: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowMultiLabel' }})
    annotation_spec_set: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSpecSet' }})
    sentiment_config: Optional[googleclouddatalabelingv1beta1sentimentconfig.GoogleCloudDatalabelingV1beta1SentimentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentimentConfig' }})
    

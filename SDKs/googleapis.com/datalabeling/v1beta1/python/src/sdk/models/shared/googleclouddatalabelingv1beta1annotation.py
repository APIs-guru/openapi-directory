from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1annotationmetadata
from . import googleclouddatalabelingv1beta1annotationvalue

class GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnum(str, Enum):
    ANNOTATION_SENTIMENT_UNSPECIFIED = "ANNOTATION_SENTIMENT_UNSPECIFIED"
    NEGATIVE = "NEGATIVE"
    POSITIVE = "POSITIVE"

class GoogleCloudDatalabelingV1beta1AnnotationAnnotationSourceEnum(str, Enum):
    ANNOTATION_SOURCE_UNSPECIFIED = "ANNOTATION_SOURCE_UNSPECIFIED"
    OPERATOR = "OPERATOR"


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1Annotation:
    annotation_metadata: Optional[googleclouddatalabelingv1beta1annotationmetadata.GoogleCloudDatalabelingV1beta1AnnotationMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationMetadata' }})
    annotation_sentiment: Optional[GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSentiment' }})
    annotation_source: Optional[GoogleCloudDatalabelingV1beta1AnnotationAnnotationSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSource' }})
    annotation_value: Optional[googleclouddatalabelingv1beta1annotationvalue.GoogleCloudDatalabelingV1beta1AnnotationValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationValue' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

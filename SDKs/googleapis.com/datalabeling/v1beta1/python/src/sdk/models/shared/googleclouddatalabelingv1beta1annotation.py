from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""GoogleCloudDatalabelingV1beta1Annotation
    Annotation for Example. Each example may have one or more annotations. For example in image classification problem, each image might have one or more labels. We call labels binded with this image an Annotation.
    """
    
    annotation_metadata: Optional[GoogleCloudDatalabelingV1beta1AnnotationMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationMetadata') }})
    annotation_sentiment: Optional[GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSentiment') }})
    annotation_source: Optional[GoogleCloudDatalabelingV1beta1AnnotationAnnotationSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSource') }})
    annotation_value: Optional[GoogleCloudDatalabelingV1beta1AnnotationValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationValue') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

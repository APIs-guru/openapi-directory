from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum(str, Enum):
    ANNOTATION_TYPE_UNSPECIFIED = "ANNOTATION_TYPE_UNSPECIFIED"
    IMAGE_CLASSIFICATION_ANNOTATION = "IMAGE_CLASSIFICATION_ANNOTATION"
    IMAGE_BOUNDING_BOX_ANNOTATION = "IMAGE_BOUNDING_BOX_ANNOTATION"
    IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION = "IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION"
    IMAGE_BOUNDING_POLY_ANNOTATION = "IMAGE_BOUNDING_POLY_ANNOTATION"
    IMAGE_POLYLINE_ANNOTATION = "IMAGE_POLYLINE_ANNOTATION"
    IMAGE_SEGMENTATION_ANNOTATION = "IMAGE_SEGMENTATION_ANNOTATION"
    VIDEO_SHOTS_CLASSIFICATION_ANNOTATION = "VIDEO_SHOTS_CLASSIFICATION_ANNOTATION"
    VIDEO_OBJECT_TRACKING_ANNOTATION = "VIDEO_OBJECT_TRACKING_ANNOTATION"
    VIDEO_OBJECT_DETECTION_ANNOTATION = "VIDEO_OBJECT_DETECTION_ANNOTATION"
    VIDEO_EVENT_ANNOTATION = "VIDEO_EVENT_ANNOTATION"
    TEXT_CLASSIFICATION_ANNOTATION = "TEXT_CLASSIFICATION_ANNOTATION"
    TEXT_ENTITY_EXTRACTION_ANNOTATION = "TEXT_ENTITY_EXTRACTION_ANNOTATION"
    GENERAL_CLASSIFICATION_ANNOTATION = "GENERAL_CLASSIFICATION_ANNOTATION"

class GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum(str, Enum):
    DATA_TYPE_UNSPECIFIED = "DATA_TYPE_UNSPECIFIED"
    IMAGE = "IMAGE"
    VIDEO = "VIDEO"
    TEXT = "TEXT"
    GENERAL_DATA = "GENERAL_DATA"


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1InputConfig:
    r"""GoogleCloudDatalabelingV1beta1InputConfig
    The configuration of input data, including data type, location, etc.
    """
    
    annotation_type: Optional[GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationType') }})
    bigquery_source: Optional[GoogleCloudDatalabelingV1beta1BigQuerySource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigquerySource') }})
    classification_metadata: Optional[GoogleCloudDatalabelingV1beta1ClassificationMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classificationMetadata') }})
    data_type: Optional[GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    gcs_source: Optional[GoogleCloudDatalabelingV1beta1GcsSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    text_metadata: Optional[GoogleCloudDatalabelingV1beta1TextMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textMetadata') }})
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1bigquerysource
from . import googleclouddatalabelingv1beta1classificationmetadata
from . import googleclouddatalabelingv1beta1gcssource
from . import googleclouddatalabelingv1beta1textmetadata

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
    annotation_type: Optional[GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationType' }})
    bigquery_source: Optional[googleclouddatalabelingv1beta1bigquerysource.GoogleCloudDatalabelingV1beta1BigQuerySource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigquerySource' }})
    classification_metadata: Optional[googleclouddatalabelingv1beta1classificationmetadata.GoogleCloudDatalabelingV1beta1ClassificationMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classificationMetadata' }})
    data_type: Optional[GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataType' }})
    gcs_source: Optional[googleclouddatalabelingv1beta1gcssource.GoogleCloudDatalabelingV1beta1GcsSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsSource' }})
    text_metadata: Optional[googleclouddatalabelingv1beta1textmetadata.GoogleCloudDatalabelingV1beta1TextMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textMetadata' }})
    

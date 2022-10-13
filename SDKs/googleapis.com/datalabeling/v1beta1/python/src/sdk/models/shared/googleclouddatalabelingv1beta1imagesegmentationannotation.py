from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1annotationspec


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation:
    annotation_colors: Optional[dict[str, googleclouddatalabelingv1beta1annotationspec.GoogleCloudDatalabelingV1beta1AnnotationSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationColors' }})
    image_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageBytes' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    

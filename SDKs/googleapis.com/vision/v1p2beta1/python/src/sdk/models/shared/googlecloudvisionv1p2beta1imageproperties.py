from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p2beta1dominantcolorsannotation


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1ImageProperties:
    dominant_colors: Optional[googlecloudvisionv1p2beta1dominantcolorsannotation.GoogleCloudVisionV1p2beta1DominantColorsAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dominantColors' }})
    

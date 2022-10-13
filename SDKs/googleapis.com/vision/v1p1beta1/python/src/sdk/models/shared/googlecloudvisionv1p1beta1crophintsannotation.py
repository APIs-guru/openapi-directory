from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p1beta1crophint


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1CropHintsAnnotation:
    crop_hints: Optional[List[googlecloudvisionv1p1beta1crophint.GoogleCloudVisionV1p1beta1CropHint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cropHints' }})
    

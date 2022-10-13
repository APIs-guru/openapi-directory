from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p2beta1crophint


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1CropHintsAnnotation:
    crop_hints: Optional[List[googlecloudvisionv1p2beta1crophint.GoogleCloudVisionV1p2beta1CropHint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cropHints' }})
    

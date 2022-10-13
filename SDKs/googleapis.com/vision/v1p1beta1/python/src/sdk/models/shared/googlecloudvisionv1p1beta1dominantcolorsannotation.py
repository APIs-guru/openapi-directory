from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p1beta1colorinfo


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1DominantColorsAnnotation:
    colors: Optional[List[googlecloudvisionv1p1beta1colorinfo.GoogleCloudVisionV1p1beta1ColorInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colors' }})
    

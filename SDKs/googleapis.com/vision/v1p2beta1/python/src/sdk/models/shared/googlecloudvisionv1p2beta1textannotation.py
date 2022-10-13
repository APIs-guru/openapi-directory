from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p2beta1page


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1TextAnnotation:
    pages: Optional[List[googlecloudvisionv1p2beta1page.GoogleCloudVisionV1p2beta1Page]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    

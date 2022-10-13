from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta2boundingpoly


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2TableBoundHint:
    bounding_box: Optional[googleclouddocumentaiv1beta2boundingpoly.GoogleCloudDocumentaiV1beta2BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingBox' }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageNumber' }})
    

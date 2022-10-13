from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta2barcode
from . import googleclouddocumentaiv1beta2documentpagelayout


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode:
    barcode: Optional[googleclouddocumentaiv1beta2barcode.GoogleCloudDocumentaiV1beta2Barcode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'barcode' }})
    layout: Optional[googleclouddocumentaiv1beta2documentpagelayout.GoogleCloudDocumentaiV1beta2DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layout' }})
    

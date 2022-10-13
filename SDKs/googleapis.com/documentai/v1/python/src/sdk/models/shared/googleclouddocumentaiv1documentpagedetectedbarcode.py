from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1barcode
from . import googleclouddocumentaiv1documentpagelayout


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentPageDetectedBarcode:
    barcode: Optional[googleclouddocumentaiv1barcode.GoogleCloudDocumentaiV1Barcode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'barcode' }})
    layout: Optional[googleclouddocumentaiv1documentpagelayout.GoogleCloudDocumentaiV1DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layout' }})
    

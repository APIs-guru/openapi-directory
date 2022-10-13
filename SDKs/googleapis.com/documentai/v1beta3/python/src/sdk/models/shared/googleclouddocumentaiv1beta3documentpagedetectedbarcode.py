from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3barcode
from . import googleclouddocumentaiv1beta3documentpagelayout


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode:
    barcode: Optional[googleclouddocumentaiv1beta3barcode.GoogleCloudDocumentaiV1beta3Barcode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'barcode' }})
    layout: Optional[googleclouddocumentaiv1beta3documentpagelayout.GoogleCloudDocumentaiV1beta3DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layout' }})
    

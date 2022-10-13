from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta2documentpagetabletablerow
from . import googleclouddocumentaiv1beta2documentpagedetectedlanguage
from . import googleclouddocumentaiv1beta2documentpagetabletablerow
from . import googleclouddocumentaiv1beta2documentpagelayout


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2DocumentPageTable:
    body_rows: Optional[List[googleclouddocumentaiv1beta2documentpagetabletablerow.GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bodyRows' }})
    detected_languages: Optional[List[googleclouddocumentaiv1beta2documentpagedetectedlanguage.GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedLanguages' }})
    header_rows: Optional[List[googleclouddocumentaiv1beta2documentpagetabletablerow.GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headerRows' }})
    layout: Optional[googleclouddocumentaiv1beta2documentpagelayout.GoogleCloudDocumentaiV1beta2DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layout' }})
    

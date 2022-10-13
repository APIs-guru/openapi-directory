from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1documentpagetabletablerow
from . import googleclouddocumentaiv1documentpagedetectedlanguage
from . import googleclouddocumentaiv1documentpagetabletablerow
from . import googleclouddocumentaiv1documentpagelayout


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentPageTable:
    body_rows: Optional[List[googleclouddocumentaiv1documentpagetabletablerow.GoogleCloudDocumentaiV1DocumentPageTableTableRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bodyRows' }})
    detected_languages: Optional[List[googleclouddocumentaiv1documentpagedetectedlanguage.GoogleCloudDocumentaiV1DocumentPageDetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedLanguages' }})
    header_rows: Optional[List[googleclouddocumentaiv1documentpagetabletablerow.GoogleCloudDocumentaiV1DocumentPageTableTableRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headerRows' }})
    layout: Optional[googleclouddocumentaiv1documentpagelayout.GoogleCloudDocumentaiV1DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layout' }})
    

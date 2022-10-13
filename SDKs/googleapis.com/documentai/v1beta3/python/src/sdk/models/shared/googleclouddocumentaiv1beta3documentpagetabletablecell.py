from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3documentpagedetectedlanguage
from . import googleclouddocumentaiv1beta3documentpagelayout


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell:
    col_span: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colSpan' }})
    detected_languages: Optional[List[googleclouddocumentaiv1beta3documentpagedetectedlanguage.GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedLanguages' }})
    layout: Optional[googleclouddocumentaiv1beta3documentpagelayout.GoogleCloudDocumentaiV1beta3DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layout' }})
    row_span: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowSpan' }})
    

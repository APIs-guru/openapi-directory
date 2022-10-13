from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3documentpagetokendetectedbreak
from . import googleclouddocumentaiv1beta3documentpagedetectedlanguage
from . import googleclouddocumentaiv1beta3documentpagelayout
from . import googleclouddocumentaiv1beta3documentprovenance


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentPageToken:
    detected_break: Optional[googleclouddocumentaiv1beta3documentpagetokendetectedbreak.GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedBreak' }})
    detected_languages: Optional[List[googleclouddocumentaiv1beta3documentpagedetectedlanguage.GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedLanguages' }})
    layout: Optional[googleclouddocumentaiv1beta3documentpagelayout.GoogleCloudDocumentaiV1beta3DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layout' }})
    provenance: Optional[googleclouddocumentaiv1beta3documentprovenance.GoogleCloudDocumentaiV1beta3DocumentProvenance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provenance' }})
    

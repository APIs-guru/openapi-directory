from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1document
from . import googleclouddocumentaiv1rawdocument


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1ProcessRequest:
    field_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldMask' }})
    inline_document: Optional[googleclouddocumentaiv1document.GoogleCloudDocumentaiV1Document] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inlineDocument' }})
    raw_document: Optional[googleclouddocumentaiv1rawdocument.GoogleCloudDocumentaiV1RawDocument] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rawDocument' }})
    skip_human_review: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipHumanReview' }})
    

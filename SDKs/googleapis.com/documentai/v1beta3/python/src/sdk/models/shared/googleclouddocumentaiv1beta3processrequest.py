from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3document
from . import googleclouddocumentaiv1beta3document
from . import googleclouddocumentaiv1beta3rawdocument


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3ProcessRequest:
    document: Optional[googleclouddocumentaiv1beta3document.GoogleCloudDocumentaiV1beta3Document] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document' }})
    field_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldMask' }})
    inline_document: Optional[googleclouddocumentaiv1beta3document.GoogleCloudDocumentaiV1beta3Document] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inlineDocument' }})
    raw_document: Optional[googleclouddocumentaiv1beta3rawdocument.GoogleCloudDocumentaiV1beta3RawDocument] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rawDocument' }})
    skip_human_review: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipHumanReview' }})
    

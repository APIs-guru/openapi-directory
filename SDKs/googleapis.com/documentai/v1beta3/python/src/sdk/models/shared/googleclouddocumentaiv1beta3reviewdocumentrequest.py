from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3document
from . import googleclouddocumentaiv1beta3documentschema
from . import googleclouddocumentaiv1beta3document

class GoogleCloudDocumentaiV1beta3ReviewDocumentRequestPriorityEnum(str, Enum):
    DEFAULT = "DEFAULT"
    URGENT = "URGENT"


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3ReviewDocumentRequest:
    document: Optional[googleclouddocumentaiv1beta3document.GoogleCloudDocumentaiV1beta3Document] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document' }})
    document_schema: Optional[googleclouddocumentaiv1beta3documentschema.GoogleCloudDocumentaiV1beta3DocumentSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentSchema' }})
    enable_schema_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableSchemaValidation' }})
    inline_document: Optional[googleclouddocumentaiv1beta3document.GoogleCloudDocumentaiV1beta3Document] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inlineDocument' }})
    priority: Optional[GoogleCloudDocumentaiV1beta3ReviewDocumentRequestPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    

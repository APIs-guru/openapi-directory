from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDocumentaiV1beta3ReviewDocumentRequestPriorityEnum(str, Enum):
    DEFAULT = "DEFAULT"
    URGENT = "URGENT"


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3ReviewDocumentRequest:
    r"""GoogleCloudDocumentaiV1beta3ReviewDocumentRequest
    Request message for review document method.
    """
    
    document: Optional[GoogleCloudDocumentaiV1beta3Document] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    document_schema: Optional[GoogleCloudDocumentaiV1beta3DocumentSchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentSchema') }})
    enable_schema_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableSchemaValidation') }})
    inline_document: Optional[GoogleCloudDocumentaiV1beta3Document] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineDocument') }})
    priority: Optional[GoogleCloudDocumentaiV1beta3ReviewDocumentRequestPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    

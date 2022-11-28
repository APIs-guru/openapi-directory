from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum(str, Enum):
    DEFAULT = "DEFAULT"
    URGENT = "URGENT"


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1ReviewDocumentRequest:
    r"""GoogleCloudDocumentaiV1ReviewDocumentRequest
    Request message for review document method.
    """
    
    document_schema: Optional[GoogleCloudDocumentaiV1DocumentSchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentSchema') }})
    enable_schema_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableSchemaValidation') }})
    inline_document: Optional[GoogleCloudDocumentaiV1Document] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineDocument') }})
    priority: Optional[GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    

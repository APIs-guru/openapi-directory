from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DocumentBoilerplateHandlingEnum(str, Enum):
    BOILERPLATE_HANDLING_UNSPECIFIED = "BOILERPLATE_HANDLING_UNSPECIFIED"
    SKIP_BOILERPLATE = "SKIP_BOILERPLATE"
    KEEP_BOILERPLATE = "KEEP_BOILERPLATE"

class DocumentTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    PLAIN_TEXT = "PLAIN_TEXT"
    HTML = "HTML"


@dataclass_json
@dataclass
class Document:
    r"""Document
    Represents the input to API methods.
    """
    
    boilerplate_handling: Optional[DocumentBoilerplateHandlingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boilerplateHandling') }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    gcs_content_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsContentUri') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    reference_web_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceWebUri') }})
    type: Optional[DocumentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AnnotateTextRequestEncodingTypeEnum(str, Enum):
    NONE = "NONE"
    UTF8 = "UTF8"
    UTF16 = "UTF16"
    UTF32 = "UTF32"


@dataclass_json
@dataclass
class AnnotateTextRequest:
    r"""AnnotateTextRequest
    The request message for the text annotation API, which can perform multiple analysis types (sentiment, entities, and syntax) in one call.
    """
    
    document: Optional[Document] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    encoding_type: Optional[AnnotateTextRequestEncodingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encodingType') }})
    features: Optional[Features] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    

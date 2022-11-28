from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AnalyzeSentimentRequestEncodingTypeEnum(str, Enum):
    NONE = "NONE"
    UTF8 = "UTF8"
    UTF16 = "UTF16"
    UTF32 = "UTF32"


@dataclass_json
@dataclass
class AnalyzeSentimentRequest:
    r"""AnalyzeSentimentRequest
    The sentiment analysis request message.
    """
    
    document: Optional[Document] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    encoding_type: Optional[AnalyzeSentimentRequestEncodingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encodingType') }})
    

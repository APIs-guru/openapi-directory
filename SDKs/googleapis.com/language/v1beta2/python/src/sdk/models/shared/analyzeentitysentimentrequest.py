from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import document

class AnalyzeEntitySentimentRequestEncodingTypeEnum(str, Enum):
    NONE = "NONE"
    UTF8 = "UTF8"
    UTF16 = "UTF16"
    UTF32 = "UTF32"


@dataclass_json
@dataclass
class AnalyzeEntitySentimentRequest:
    document: Optional[document.Document] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document' }})
    encoding_type: Optional[AnalyzeEntitySentimentRequestEncodingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encodingType' }})
    

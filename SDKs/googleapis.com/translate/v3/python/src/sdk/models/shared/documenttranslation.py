from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DocumentTranslation:
    byte_stream_outputs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'byteStreamOutputs' }})
    detected_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedLanguageCode' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SuperStickerMetadata:
    alt_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'altText' }})
    alt_text_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'altTextLanguage' }})
    sticker_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stickerId' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import superstickermetadata


@dataclass_json
@dataclass
class LiveChatSuperStickerDetails:
    amount_display_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amountDisplayString' }})
    amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amountMicros' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    super_sticker_metadata: Optional[superstickermetadata.SuperStickerMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'superStickerMetadata' }})
    tier: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tier' }})
    

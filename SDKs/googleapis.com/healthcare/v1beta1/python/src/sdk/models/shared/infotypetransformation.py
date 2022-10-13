from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import charactermaskconfig
from . import cryptohashconfig
from . import dateshiftconfig


@dataclass_json
@dataclass
class InfoTypeTransformation:
    character_mask_config: Optional[charactermaskconfig.CharacterMaskConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'characterMaskConfig' }})
    crypto_hash_config: Optional[cryptohashconfig.CryptoHashConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cryptoHashConfig' }})
    date_shift_config: Optional[dateshiftconfig.DateShiftConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateShiftConfig' }})
    info_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infoTypes' }})
    redact_config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redactConfig' }})
    replace_with_info_type_config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replaceWithInfoTypeConfig' }})
    

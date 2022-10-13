from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2charstoignore


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CharacterMaskConfig:
    characters_to_ignore: Optional[List[googleprivacydlpv2charstoignore.GooglePrivacyDlpV2CharsToIgnore]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'charactersToIgnore' }})
    masking_character: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maskingCharacter' }})
    number_to_mask: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberToMask' }})
    reverse_order: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reverseOrder' }})
    

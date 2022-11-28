from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CharacterMaskConfig:
    r"""CharacterMaskConfig
    Mask a string by replacing its characters with a fixed character.
    """
    
    masking_character: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maskingCharacter') }})
    

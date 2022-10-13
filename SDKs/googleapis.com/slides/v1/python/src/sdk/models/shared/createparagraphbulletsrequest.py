from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import tablecelllocation
from . import range

class CreateParagraphBulletsRequestBulletPresetEnum(str, Enum):
    BULLET_DISC_CIRCLE_SQUARE = "BULLET_DISC_CIRCLE_SQUARE"
    BULLET_DIAMONDX_ARROW3_D_SQUARE = "BULLET_DIAMONDX_ARROW3D_SQUARE"
    BULLET_CHECKBOX = "BULLET_CHECKBOX"
    BULLET_ARROW_DIAMOND_DISC = "BULLET_ARROW_DIAMOND_DISC"
    BULLET_STAR_CIRCLE_SQUARE = "BULLET_STAR_CIRCLE_SQUARE"
    BULLET_ARROW3_D_CIRCLE_SQUARE = "BULLET_ARROW3D_CIRCLE_SQUARE"
    BULLET_LEFTTRIANGLE_DIAMOND_DISC = "BULLET_LEFTTRIANGLE_DIAMOND_DISC"
    BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE = "BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE"
    BULLET_DIAMOND_CIRCLE_SQUARE = "BULLET_DIAMOND_CIRCLE_SQUARE"
    NUMBERED_DIGIT_ALPHA_ROMAN = "NUMBERED_DIGIT_ALPHA_ROMAN"
    NUMBERED_DIGIT_ALPHA_ROMAN_PARENS = "NUMBERED_DIGIT_ALPHA_ROMAN_PARENS"
    NUMBERED_DIGIT_NESTED = "NUMBERED_DIGIT_NESTED"
    NUMBERED_UPPERALPHA_ALPHA_ROMAN = "NUMBERED_UPPERALPHA_ALPHA_ROMAN"
    NUMBERED_UPPERROMAN_UPPERALPHA_DIGIT = "NUMBERED_UPPERROMAN_UPPERALPHA_DIGIT"
    NUMBERED_ZERODIGIT_ALPHA_ROMAN = "NUMBERED_ZERODIGIT_ALPHA_ROMAN"


@dataclass_json
@dataclass
class CreateParagraphBulletsRequest:
    bullet_preset: Optional[CreateParagraphBulletsRequestBulletPresetEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bulletPreset' }})
    cell_location: Optional[tablecelllocation.TableCellLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cellLocation' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    text_range: Optional[range.Range] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textRange' }})
    

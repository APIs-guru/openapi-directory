from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""CreateParagraphBulletsRequest
    Creates bullets for all of the paragraphs that overlap with the given text index range. The nesting level of each paragraph will be determined by counting leading tabs in front of each paragraph. To avoid excess space between the bullet and the corresponding paragraph, these leading tabs are removed by this request. This may change the indices of parts of the text. If the paragraph immediately before paragraphs being updated is in a list with a matching preset, the paragraphs being updated are added to that preceding list.
    """
    
    bullet_preset: Optional[CreateParagraphBulletsRequestBulletPresetEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bulletPreset') }})
    cell_location: Optional[TableCellLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cellLocation') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    text_range: Optional[Range] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textRange') }})
    

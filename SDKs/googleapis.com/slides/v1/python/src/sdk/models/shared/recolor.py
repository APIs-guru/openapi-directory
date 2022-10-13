from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import colorstop

class RecolorNameEnum(str, Enum):
    NONE = "NONE"
    LIGHT1 = "LIGHT1"
    LIGHT2 = "LIGHT2"
    LIGHT3 = "LIGHT3"
    LIGHT4 = "LIGHT4"
    LIGHT5 = "LIGHT5"
    LIGHT6 = "LIGHT6"
    LIGHT7 = "LIGHT7"
    LIGHT8 = "LIGHT8"
    LIGHT9 = "LIGHT9"
    LIGHT10 = "LIGHT10"
    DARK1 = "DARK1"
    DARK2 = "DARK2"
    DARK3 = "DARK3"
    DARK4 = "DARK4"
    DARK5 = "DARK5"
    DARK6 = "DARK6"
    DARK7 = "DARK7"
    DARK8 = "DARK8"
    DARK9 = "DARK9"
    DARK10 = "DARK10"
    GRAYSCALE = "GRAYSCALE"
    NEGATIVE = "NEGATIVE"
    SEPIA = "SEPIA"
    CUSTOM = "CUSTOM"


@dataclass_json
@dataclass
class Recolor:
    name: Optional[RecolorNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    recolor_stops: Optional[List[colorstop.ColorStop]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recolorStops' }})
    

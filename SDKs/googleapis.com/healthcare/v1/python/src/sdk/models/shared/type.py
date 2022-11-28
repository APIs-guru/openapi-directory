from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TypePrimitiveEnum(str, Enum):
    PRIMITIVE_UNSPECIFIED = "PRIMITIVE_UNSPECIFIED"
    STRING = "STRING"
    VARIES = "VARIES"
    UNESCAPED_STRING = "UNESCAPED_STRING"


@dataclass_json
@dataclass
class Type:
    r"""Type
    A type definition for some HL7v2 type (incl. Segments and Datatypes).
    """
    
    fields: Optional[List[Field]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    primitive: Optional[TypePrimitiveEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primitive') }})
    

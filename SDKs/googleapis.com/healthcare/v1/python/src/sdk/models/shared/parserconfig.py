from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ParserConfigVersionEnum(str, Enum):
    PARSER_VERSION_UNSPECIFIED = "PARSER_VERSION_UNSPECIFIED"
    V1 = "V1"
    V2 = "V2"
    V3 = "V3"


@dataclass_json
@dataclass
class ParserConfig:
    r"""ParserConfig
    The configuration for the parser. It determines how the server parses the messages.
    """
    
    allow_null_header: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowNullHeader') }})
    schema: Optional[SchemaPackage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    segment_terminator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentTerminator') }})
    version: Optional[ParserConfigVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

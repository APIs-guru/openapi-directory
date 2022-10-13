from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import gridrange

class TextToColumnsRequestDelimiterTypeEnum(str, Enum):
    DELIMITER_TYPE_UNSPECIFIED = "DELIMITER_TYPE_UNSPECIFIED"
    COMMA = "COMMA"
    SEMICOLON = "SEMICOLON"
    PERIOD = "PERIOD"
    SPACE = "SPACE"
    CUSTOM = "CUSTOM"
    AUTODETECT = "AUTODETECT"


@dataclass_json
@dataclass
class TextToColumnsRequest:
    delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delimiter' }})
    delimiter_type: Optional[TextToColumnsRequestDelimiterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delimiterType' }})
    source: Optional[gridrange.GridRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    

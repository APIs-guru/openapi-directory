from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import schemapackage

class ParserConfigVersionEnum(str, Enum):
    PARSER_VERSION_UNSPECIFIED = "PARSER_VERSION_UNSPECIFIED"
    V1 = "V1"
    V2 = "V2"


@dataclass_json
@dataclass
class ParserConfig:
    allow_null_header: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowNullHeader' }})
    schema: Optional[schemapackage.SchemaPackage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    segment_terminator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segmentTerminator' }})
    version: Optional[ParserConfigVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

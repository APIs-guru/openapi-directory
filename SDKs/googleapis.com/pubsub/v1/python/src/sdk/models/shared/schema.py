from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SchemaTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    PROTOCOL_BUFFER = "PROTOCOL_BUFFER"
    AVRO = "AVRO"


@dataclass_json
@dataclass
class Schema:
    r"""Schema
    A schema resource.
    """
    
    definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    revision_create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionCreateTime') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    type: Optional[SchemaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class SchemaInput:
    r"""SchemaInput
    A schema resource.
    """
    
    definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[SchemaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

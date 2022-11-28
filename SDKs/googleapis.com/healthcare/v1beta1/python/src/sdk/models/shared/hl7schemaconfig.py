from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Hl7SchemaConfig:
    r"""Hl7SchemaConfig
    Root config message for HL7v2 schema. This contains a schema structure of groups and segments, and filters that determine which messages to apply the schema structure to.
    """
    
    message_schema_configs: Optional[dict[str, SchemaGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageSchemaConfigs') }})
    version: Optional[List[VersionSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import schemagroup
from . import versionsource


@dataclass_json
@dataclass
class Hl7SchemaConfig:
    message_schema_configs: Optional[dict[str, schemagroup.SchemaGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageSchemaConfigs' }})
    version: Optional[List[versionsource.VersionSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

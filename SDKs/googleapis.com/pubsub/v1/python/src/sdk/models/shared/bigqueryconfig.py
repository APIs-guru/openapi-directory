from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BigQueryConfigStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    PERMISSION_DENIED = "PERMISSION_DENIED"
    NOT_FOUND = "NOT_FOUND"
    SCHEMA_MISMATCH = "SCHEMA_MISMATCH"


@dataclass_json
@dataclass
class BigQueryConfig:
    r"""BigQueryConfig
    Configuration for a BigQuery subscription.
    """
    
    drop_unknown_fields: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dropUnknownFields') }})
    state: Optional[BigQueryConfigStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    use_topic_schema: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useTopicSchema') }})
    write_metadata: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeMetadata') }})
    

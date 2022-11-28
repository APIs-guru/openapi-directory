from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DataExporterConfigTypEnum(str, Enum):
    KAFKA = "kafka"
    PULSAR = "pulsar"
    FILE = "file"
    MAILER = "mailer"
    ELASTIC = "elastic"
    CONSOLE = "console"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class DataExporterConfig:
    r"""DataExporterConfig
    Settings to export Otorshi events
    """
    
    buffer_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bufferSize') }})
    config: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    desc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    enabled: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    filtering: Optional[Filtering] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filtering') }})
    group_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupDuration') }})
    group_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupSize') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    json_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonWorkers') }})
    location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    projection: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projection') }})
    send_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendWorkers') }})
    typ: Optional[DataExporterConfigTypEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typ') }})
    

from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import elasticconfig
from . import kafkaconfig
from . import pulsardataexporterconfig
from . import filedataexporterconfig
from . import mailergenericexporterconfig
from . import mailerconsoleexporterconfig
from . import mailermailgunexporterconfig
from . import mailermailjetexporterconfig
from . import mailersendgridexporterconfig
from . import customdataexporterconfig
from . import filtering
from . import location

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
    buffer_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bufferSize' }})
    config: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    desc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desc' }})
    enabled: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    filtering: Optional[filtering.Filtering] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filtering' }})
    group_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupDuration' }})
    group_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupSize' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    json_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jsonWorkers' }})
    location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    projection: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projection' }})
    send_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sendWorkers' }})
    typ: Optional[DataExporterConfigTypEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typ' }})
    

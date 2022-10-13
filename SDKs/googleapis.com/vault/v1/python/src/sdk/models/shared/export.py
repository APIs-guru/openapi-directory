from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import cloudstoragesink
from . import exportoptions
from . import query
from . import userinfo
from . import exportstats

class ExportStatusEnum(str, Enum):
    EXPORT_STATUS_UNSPECIFIED = "EXPORT_STATUS_UNSPECIFIED"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    IN_PROGRESS = "IN_PROGRESS"


@dataclass_json
@dataclass
class Export:
    cloud_storage_sink: Optional[cloudstoragesink.CloudStorageSink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudStorageSink' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    export_options: Optional[exportoptions.ExportOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportOptions' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    matter_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matterId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    query: Optional[query.Query] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    requester: Optional[userinfo.UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requester' }})
    stats: Optional[exportstats.ExportStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    status: Optional[ExportStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

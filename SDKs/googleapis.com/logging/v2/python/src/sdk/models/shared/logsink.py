from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import bigqueryoptions
from . import logexclusion

class LogSinkOutputVersionFormatEnum(str, Enum):
    VERSION_FORMAT_UNSPECIFIED = "VERSION_FORMAT_UNSPECIFIED"
    V2 = "V2"
    V1 = "V1"


@dataclass_json
@dataclass
class LogSink:
    bigquery_options: Optional[bigqueryoptions.BigQueryOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigqueryOptions' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    exclusions: Optional[List[logexclusion.LogExclusion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclusions' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    include_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeChildren' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    output_version_format: Optional[LogSinkOutputVersionFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputVersionFormat' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    writer_identity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'writerIdentity' }})
    

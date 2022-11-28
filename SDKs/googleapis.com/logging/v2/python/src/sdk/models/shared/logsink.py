from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class LogSinkOutputVersionFormatEnum(str, Enum):
    VERSION_FORMAT_UNSPECIFIED = "VERSION_FORMAT_UNSPECIFIED"
    V2 = "V2"
    V1 = "V1"


@dataclass_json
@dataclass
class LogSinkInput:
    r"""LogSinkInput
    Describes a sink used to export log entries to one of the following destinations in any project: a Cloud Storage bucket, a BigQuery dataset, a Pub/Sub topic or a Cloud Logging log bucket. A logs filter controls which log entries are exported. The sink must be created within a project, organization, billing account, or folder.
    """
    
    bigquery_options: Optional[BigQueryOptionsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryOptions') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    exclusions: Optional[List[LogExclusionInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusions') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    include_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeChildren') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    output_version_format: Optional[LogSinkOutputVersionFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputVersionFormat') }})
    

@dataclass_json
@dataclass
class LogSink:
    r"""LogSink
    Describes a sink used to export log entries to one of the following destinations in any project: a Cloud Storage bucket, a BigQuery dataset, a Pub/Sub topic or a Cloud Logging log bucket. A logs filter controls which log entries are exported. The sink must be created within a project, organization, billing account, or folder.
    """
    
    bigquery_options: Optional[BigQueryOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryOptions') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    exclusions: Optional[List[LogExclusion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusions') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    include_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeChildren') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    output_version_format: Optional[LogSinkOutputVersionFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputVersionFormat') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    writer_identity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writerIdentity') }})
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudSecuritycenterV1BigQueryExport:
    r"""GoogleCloudSecuritycenterV1BigQueryExport
    Configures how to deliver Findings to BigQuery Instance.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    dataset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataset') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    most_recent_editor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mostRecentEditor') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principal') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class GoogleCloudSecuritycenterV1BigQueryExportInput:
    r"""GoogleCloudSecuritycenterV1BigQueryExportInput
    Configures how to deliver Findings to BigQuery Instance.
    """
    
    dataset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataset') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

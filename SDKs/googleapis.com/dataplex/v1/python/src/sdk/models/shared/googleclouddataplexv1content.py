from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ContentInput:
    r"""GoogleCloudDataplexV1ContentInput
    Content represents a user-visible notebook or a sql script
    """
    
    data_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataText') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    notebook: Optional[GoogleCloudDataplexV1ContentNotebook] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notebook') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    sql_script: Optional[GoogleCloudDataplexV1ContentSQLScript] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqlScript') }})
    

@dataclass_json
@dataclass
class GoogleCloudDataplexV1Content:
    r"""GoogleCloudDataplexV1Content
    Content represents a user-visible notebook or a sql script
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    data_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataText') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notebook: Optional[GoogleCloudDataplexV1ContentNotebook] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notebook') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    sql_script: Optional[GoogleCloudDataplexV1ContentSQLScript] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqlScript') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

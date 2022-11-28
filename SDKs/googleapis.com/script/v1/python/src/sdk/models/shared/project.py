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
class Project:
    r"""Project
    The script project resource.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator: Optional[GoogleAppsScriptTypeUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    last_modify_user: Optional[GoogleAppsScriptTypeUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifyUser') }})
    parent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentId') }})
    script_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptId') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

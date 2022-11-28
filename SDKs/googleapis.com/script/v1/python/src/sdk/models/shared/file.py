from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FileTypeEnum(str, Enum):
    ENUM_TYPE_UNSPECIFIED = "ENUM_TYPE_UNSPECIFIED"
    SERVER_JS = "SERVER_JS"
    HTML = "HTML"
    JSON = "JSON"


@dataclass_json
@dataclass
class File:
    r"""File
    An individual file within a script project. A file is a third-party source code created by one or more developers. It can be a server-side JS code, HTML, or a configuration file. Each script project can contain multiple files.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    function_set: Optional[GoogleAppsScriptTypeFunctionSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionSet') }})
    last_modify_user: Optional[GoogleAppsScriptTypeUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifyUser') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    type: Optional[FileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

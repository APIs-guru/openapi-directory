from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleappsscripttypefunctionset
from . import googleappsscripttypeuser

class FileTypeEnum(str, Enum):
    ENUM_TYPE_UNSPECIFIED = "ENUM_TYPE_UNSPECIFIED"
    SERVER_JS = "SERVER_JS"
    HTML = "HTML"
    JSON = "JSON"


@dataclass_json
@dataclass
class File:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    function_set: Optional[googleappsscripttypefunctionset.GoogleAppsScriptTypeFunctionSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functionSet' }})
    last_modify_user: Optional[googleappsscripttypeuser.GoogleAppsScriptTypeUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifyUser' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    type: Optional[FileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    

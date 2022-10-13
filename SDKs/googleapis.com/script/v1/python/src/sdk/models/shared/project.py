from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappsscripttypeuser
from . import googleappsscripttypeuser


@dataclass_json
@dataclass
class Project:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    creator: Optional[googleappsscripttypeuser.GoogleAppsScriptTypeUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    last_modify_user: Optional[googleappsscripttypeuser.GoogleAppsScriptTypeUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifyUser' }})
    parent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentId' }})
    script_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptId' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    

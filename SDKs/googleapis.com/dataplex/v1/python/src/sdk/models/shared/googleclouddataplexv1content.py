from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1contentnotebook
from . import googleclouddataplexv1contentsqlscript


@dataclass_json
@dataclass
class GoogleCloudDataplexV1Content:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    data_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataText' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notebook: Optional[googleclouddataplexv1contentnotebook.GoogleCloudDataplexV1ContentNotebook] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notebook' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    sql_script: Optional[googleclouddataplexv1contentsqlscript.GoogleCloudDataplexV1ContentSQLScript] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sqlScript' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    

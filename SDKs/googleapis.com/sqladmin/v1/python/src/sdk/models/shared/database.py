from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sqlserverdatabasedetails


@dataclass_json
@dataclass
class Database:
    charset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'charset' }})
    collation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collation' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    sqlserver_database_details: Optional[sqlserverdatabasedetails.SQLServerDatabaseDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sqlserverDatabaseDetails' }})
    

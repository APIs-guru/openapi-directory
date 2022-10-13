from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sslconfig


@dataclass_json
@dataclass
class MySQLConnectionProfile:
    cloud_sql_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudSqlId' }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    password_set: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passwordSet' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    ssl: Optional[sslconfig.SslConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssl' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

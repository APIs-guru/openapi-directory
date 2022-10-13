from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostgresqlProfile:
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

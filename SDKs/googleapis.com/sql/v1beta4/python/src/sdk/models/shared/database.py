from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Database:
    r"""Database
    Represents a SQL database on the Cloud SQL instance.
    """
    
    charset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('charset') }})
    collation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collation') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    sqlserver_database_details: Optional[SQLServerDatabaseDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqlserverDatabaseDetails') }})
    

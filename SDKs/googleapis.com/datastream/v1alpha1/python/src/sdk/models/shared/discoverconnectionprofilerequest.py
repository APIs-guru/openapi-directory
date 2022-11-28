from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DiscoverConnectionProfileRequestInput:
    r"""DiscoverConnectionProfileRequestInput
    Request message for 'discover' ConnectionProfile request.
    """
    
    connection_profile: Optional[ConnectionProfileInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionProfile') }})
    connection_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionProfileName') }})
    mysql_rdbms: Optional[MysqlRdbms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlRdbms') }})
    oracle_rdbms: Optional[OracleRdbms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oracleRdbms') }})
    recursion_depth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recursionDepth') }})
    recursive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recursive') }})
    

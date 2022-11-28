from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceObjectIdentifier:
    r"""SourceObjectIdentifier
    Represents an identifier of an object in the data source.
    """
    
    mysql_identifier: Optional[MysqlObjectIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlIdentifier') }})
    oracle_identifier: Optional[OracleObjectIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oracleIdentifier') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceConfig:
    r"""SourceConfig
    The configuration of the stream source.
    """
    
    mysql_source_config: Optional[MysqlSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlSourceConfig') }})
    oracle_source_config: Optional[OracleSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oracleSourceConfig') }})
    source_connection_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceConnectionProfileName') }})
    

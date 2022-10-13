from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import mysqlsourceconfig
from . import oraclesourceconfig


@dataclass_json
@dataclass
class SourceConfig:
    mysql_source_config: Optional[mysqlsourceconfig.MysqlSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mysqlSourceConfig' }})
    oracle_source_config: Optional[oraclesourceconfig.OracleSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oracleSourceConfig' }})
    source_connection_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceConnectionProfileName' }})
    

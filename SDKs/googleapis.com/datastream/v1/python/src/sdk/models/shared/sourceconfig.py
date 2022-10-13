from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import mysqlsourceconfig
from . import oraclesourceconfig
from . import postgresqlsourceconfig


@dataclass_json
@dataclass
class SourceConfig:
    mysql_source_config: Optional[mysqlsourceconfig.MysqlSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mysqlSourceConfig' }})
    oracle_source_config: Optional[oraclesourceconfig.OracleSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oracleSourceConfig' }})
    postgresql_source_config: Optional[postgresqlsourceconfig.PostgresqlSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postgresqlSourceConfig' }})
    source_connection_profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceConnectionProfile' }})
    

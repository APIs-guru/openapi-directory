from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ipmapping
from . import sslcert

class ConnectSettingsBackendTypeEnum(str, Enum):
    SQL_BACKEND_TYPE_UNSPECIFIED = "SQL_BACKEND_TYPE_UNSPECIFIED"
    FIRST_GEN = "FIRST_GEN"
    SECOND_GEN = "SECOND_GEN"
    EXTERNAL = "EXTERNAL"

class ConnectSettingsDatabaseVersionEnum(str, Enum):
    SQL_DATABASE_VERSION_UNSPECIFIED = "SQL_DATABASE_VERSION_UNSPECIFIED"
    MYSQL_5_1 = "MYSQL_5_1"
    MYSQL_5_5 = "MYSQL_5_5"
    MYSQL_5_6 = "MYSQL_5_6"
    MYSQL_5_7 = "MYSQL_5_7"
    SQLSERVER_2017_STANDARD = "SQLSERVER_2017_STANDARD"
    SQLSERVER_2017_ENTERPRISE = "SQLSERVER_2017_ENTERPRISE"
    SQLSERVER_2017_EXPRESS = "SQLSERVER_2017_EXPRESS"
    SQLSERVER_2017_WEB = "SQLSERVER_2017_WEB"
    POSTGRES_9_6 = "POSTGRES_9_6"
    POSTGRES_10 = "POSTGRES_10"
    POSTGRES_11 = "POSTGRES_11"
    POSTGRES_12 = "POSTGRES_12"
    POSTGRES_13 = "POSTGRES_13"
    POSTGRES_14 = "POSTGRES_14"
    MYSQL_8_0 = "MYSQL_8_0"
    MYSQL_8_0_18 = "MYSQL_8_0_18"
    MYSQL_8_0_26 = "MYSQL_8_0_26"
    MYSQL_8_0_27 = "MYSQL_8_0_27"
    MYSQL_8_0_28 = "MYSQL_8_0_28"
    MYSQL_8_0_29 = "MYSQL_8_0_29"
    MYSQL_8_0_30 = "MYSQL_8_0_30"
    SQLSERVER_2019_STANDARD = "SQLSERVER_2019_STANDARD"
    SQLSERVER_2019_ENTERPRISE = "SQLSERVER_2019_ENTERPRISE"
    SQLSERVER_2019_EXPRESS = "SQLSERVER_2019_EXPRESS"
    SQLSERVER_2019_WEB = "SQLSERVER_2019_WEB"


@dataclass_json
@dataclass
class ConnectSettings:
    backend_type: Optional[ConnectSettingsBackendTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backendType' }})
    database_version: Optional[ConnectSettingsDatabaseVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseVersion' }})
    ip_addresses: Optional[List[ipmapping.IPMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddresses' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    server_ca_cert: Optional[sslcert.SslCert] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverCaCert' }})
    

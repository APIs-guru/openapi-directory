from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import forwardsshtunnelconnectivity
from . import gcsprofile
from . import mysqlprofile
from . import oracleprofile
from . import postgresqlprofile
from . import privateconnectivity


@dataclass_json
@dataclass
class ConnectionProfile:
    bigquery_profile: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigqueryProfile' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    forward_ssh_connectivity: Optional[forwardsshtunnelconnectivity.ForwardSSHTunnelConnectivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forwardSshConnectivity' }})
    gcs_profile: Optional[gcsprofile.GcsProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsProfile' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    mysql_profile: Optional[mysqlprofile.MysqlProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mysqlProfile' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    oracle_profile: Optional[oracleprofile.OracleProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oracleProfile' }})
    postgresql_profile: Optional[postgresqlprofile.PostgresqlProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postgresqlProfile' }})
    private_connectivity: Optional[privateconnectivity.PrivateConnectivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateConnectivity' }})
    static_service_ip_connectivity: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staticServiceIpConnectivity' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    

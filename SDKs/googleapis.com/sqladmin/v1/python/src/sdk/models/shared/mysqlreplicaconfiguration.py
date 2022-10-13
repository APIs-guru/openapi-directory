from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MySQLReplicaConfiguration:
    ca_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caCertificate' }})
    client_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientCertificate' }})
    client_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientKey' }})
    connect_retry_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectRetryInterval' }})
    dump_file_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dumpFilePath' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    master_heartbeat_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterHeartbeatPeriod' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    ssl_cipher: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslCipher' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    verify_server_certificate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifyServerCertificate' }})
    

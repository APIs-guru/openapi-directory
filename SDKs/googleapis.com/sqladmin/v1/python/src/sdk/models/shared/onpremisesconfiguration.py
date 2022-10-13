from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import instancereference


@dataclass_json
@dataclass
class OnPremisesConfiguration:
    ca_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caCertificate' }})
    client_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientCertificate' }})
    client_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientKey' }})
    dump_file_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dumpFilePath' }})
    host_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostPort' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    source_instance: Optional[instancereference.InstanceReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceInstance' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

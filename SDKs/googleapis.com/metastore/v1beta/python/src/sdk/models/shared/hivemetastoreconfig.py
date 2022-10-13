from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import auxiliaryversionconfig
from . import kerberosconfig

class HiveMetastoreConfigEndpointProtocolEnum(str, Enum):
    ENDPOINT_PROTOCOL_UNSPECIFIED = "ENDPOINT_PROTOCOL_UNSPECIFIED"
    THRIFT = "THRIFT"
    GRPC = "GRPC"


@dataclass_json
@dataclass
class HiveMetastoreConfig:
    auxiliary_versions: Optional[dict[str, auxiliaryversionconfig.AuxiliaryVersionConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auxiliaryVersions' }})
    config_overrides: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configOverrides' }})
    endpoint_protocol: Optional[HiveMetastoreConfigEndpointProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointProtocol' }})
    kerberos_config: Optional[kerberosconfig.KerberosConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kerberosConfig' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class HiveMetastoreConfigEndpointProtocolEnum(str, Enum):
    ENDPOINT_PROTOCOL_UNSPECIFIED = "ENDPOINT_PROTOCOL_UNSPECIFIED"
    THRIFT = "THRIFT"
    GRPC = "GRPC"


@dataclass_json
@dataclass
class HiveMetastoreConfigInput:
    r"""HiveMetastoreConfigInput
    Specifies configuration information specific to running Hive metastore software as the metastore service.
    """
    
    auxiliary_versions: Optional[dict[str, AuxiliaryVersionConfigInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auxiliaryVersions') }})
    config_overrides: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configOverrides') }})
    endpoint_protocol: Optional[HiveMetastoreConfigEndpointProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointProtocol') }})
    kerberos_config: Optional[KerberosConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kerberosConfig') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclass
class HiveMetastoreConfig:
    r"""HiveMetastoreConfig
    Specifies configuration information specific to running Hive metastore software as the metastore service.
    """
    
    auxiliary_versions: Optional[dict[str, AuxiliaryVersionConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auxiliaryVersions') }})
    config_overrides: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configOverrides') }})
    endpoint_protocol: Optional[HiveMetastoreConfigEndpointProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointProtocol') }})
    kerberos_config: Optional[KerberosConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kerberosConfig') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

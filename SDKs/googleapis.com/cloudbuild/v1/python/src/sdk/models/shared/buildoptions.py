from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import pooloption
from . import volume

class BuildOptionsLogStreamingOptionEnum(str, Enum):
    STREAM_DEFAULT = "STREAM_DEFAULT"
    STREAM_ON = "STREAM_ON"
    STREAM_OFF = "STREAM_OFF"

class BuildOptionsLoggingEnum(str, Enum):
    LOGGING_UNSPECIFIED = "LOGGING_UNSPECIFIED"
    LEGACY = "LEGACY"
    GCS_ONLY = "GCS_ONLY"
    STACKDRIVER_ONLY = "STACKDRIVER_ONLY"
    CLOUD_LOGGING_ONLY = "CLOUD_LOGGING_ONLY"
    NONE = "NONE"

class BuildOptionsMachineTypeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    N1_HIGHCPU_8 = "N1_HIGHCPU_8"
    N1_HIGHCPU_32 = "N1_HIGHCPU_32"
    E2_HIGHCPU_8 = "E2_HIGHCPU_8"
    E2_HIGHCPU_32 = "E2_HIGHCPU_32"

class BuildOptionsRequestedVerifyOptionEnum(str, Enum):
    NOT_VERIFIED = "NOT_VERIFIED"
    VERIFIED = "VERIFIED"

class BuildOptionsSourceProvenanceHashEnum(str, Enum):
    NONE = "NONE"
    SHA256 = "SHA256"
    MD5 = "MD5"

class BuildOptionsSubstitutionOptionEnum(str, Enum):
    MUST_MATCH = "MUST_MATCH"
    ALLOW_LOOSE = "ALLOW_LOOSE"


@dataclass_json
@dataclass
class BuildOptions:
    disk_size_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskSizeGb' }})
    dynamic_substitutions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamicSubstitutions' }})
    env: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'env' }})
    log_streaming_option: Optional[BuildOptionsLogStreamingOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logStreamingOption' }})
    logging: Optional[BuildOptionsLoggingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logging' }})
    machine_type: Optional[BuildOptionsMachineTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineType' }})
    pool: Optional[pooloption.PoolOption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pool' }})
    requested_verify_option: Optional[BuildOptionsRequestedVerifyOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedVerifyOption' }})
    secret_env: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretEnv' }})
    source_provenance_hash: Optional[List[BuildOptionsSourceProvenanceHashEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceProvenanceHash' }})
    substitution_option: Optional[BuildOptionsSubstitutionOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'substitutionOption' }})
    volumes: Optional[List[volume.Volume]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    worker_pool: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerPool' }})
    

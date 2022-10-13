from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import objectid

class CertificateExtensionConstraintsKnownExtensionsEnum(str, Enum):
    KNOWN_CERTIFICATE_EXTENSION_UNSPECIFIED = "KNOWN_CERTIFICATE_EXTENSION_UNSPECIFIED"
    BASE_KEY_USAGE = "BASE_KEY_USAGE"
    EXTENDED_KEY_USAGE = "EXTENDED_KEY_USAGE"
    CA_OPTIONS = "CA_OPTIONS"
    POLICY_IDS = "POLICY_IDS"
    AIA_OCSP_SERVERS = "AIA_OCSP_SERVERS"


@dataclass_json
@dataclass
class CertificateExtensionConstraints:
    additional_extensions: Optional[List[objectid.ObjectID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalExtensions' }})
    known_extensions: Optional[List[CertificateExtensionConstraintsKnownExtensionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'knownExtensions' }})
    

from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import managedcertificate
from . import selfmanagedcertificate

class CertificateScopeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    EDGE_CACHE = "EDGE_CACHE"


@dataclass_json
@dataclass
class Certificate:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    managed: Optional[managedcertificate.ManagedCertificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managed' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pem_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pemCertificate' }})
    san_dnsnames: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sanDnsnames' }})
    scope: Optional[CertificateScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    self_managed: Optional[selfmanagedcertificate.SelfManagedCertificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfManaged' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    

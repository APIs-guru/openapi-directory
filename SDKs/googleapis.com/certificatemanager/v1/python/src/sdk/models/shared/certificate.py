from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CertificateScopeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    EDGE_CACHE = "EDGE_CACHE"


@dataclass_json
@dataclass
class Certificate:
    r"""Certificate
    Defines TLS certificate.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    managed: Optional[ManagedCertificate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managed') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pem_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pemCertificate') }})
    san_dnsnames: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sanDnsnames') }})
    scope: Optional[CertificateScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    self_managed: Optional[SelfManagedCertificate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfManaged') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class CertificateInput:
    r"""CertificateInput
    Defines TLS certificate.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    managed: Optional[ManagedCertificateInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managed') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    scope: Optional[CertificateScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    self_managed: Optional[SelfManagedCertificate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfManaged') }})
    

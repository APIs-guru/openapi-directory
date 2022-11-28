from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClientTLSPolicy:
    r"""ClientTLSPolicy
    ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. This resource itself does not affect configuration unless it is attached to a backend service resource.
    """
    
    client_certificate: Optional[GoogleCloudNetworksecurityV1CertificateProvider] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientCertificate') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server_validation_ca: Optional[List[ValidationCa]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverValidationCa') }})
    sni: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sni') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class ClientTLSPolicyInput:
    r"""ClientTLSPolicyInput
    ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. This resource itself does not affect configuration unless it is attached to a backend service resource.
    """
    
    client_certificate: Optional[GoogleCloudNetworksecurityV1CertificateProvider] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientCertificate') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server_validation_ca: Optional[List[ValidationCa]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverValidationCa') }})
    sni: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sni') }})
    

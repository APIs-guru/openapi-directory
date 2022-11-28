from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CertificateSubjectModeEnum(str, Enum):
    SUBJECT_REQUEST_MODE_UNSPECIFIED = "SUBJECT_REQUEST_MODE_UNSPECIFIED"
    DEFAULT = "DEFAULT"
    REFLECTED_SPIFFE = "REFLECTED_SPIFFE"


@dataclass_json
@dataclass
class CertificateInput:
    r"""CertificateInput
    A Certificate corresponds to a signed X.509 certificate issued by a CertificateAuthority.
    """
    
    certificate_description: Optional[CertificateDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateDescription') }})
    certificate_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateTemplate') }})
    config: Optional[CertificateConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    lifetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    pem_csr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pemCsr') }})
    revocation_details: Optional[RevocationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revocationDetails') }})
    subject_mode: Optional[CertificateSubjectModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectMode') }})
    

@dataclass_json
@dataclass
class Certificate:
    r"""Certificate
    A Certificate corresponds to a signed X.509 certificate issued by a CertificateAuthority.
    """
    
    certificate_description: Optional[CertificateDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateDescription') }})
    certificate_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateTemplate') }})
    config: Optional[CertificateConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    issuer_certificate_authority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuerCertificateAuthority') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    lifetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pem_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pemCertificate') }})
    pem_certificate_chain: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pemCertificateChain') }})
    pem_csr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pemCsr') }})
    revocation_details: Optional[RevocationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revocationDetails') }})
    subject_mode: Optional[CertificateSubjectModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectMode') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CertificateDescription:
    r"""CertificateDescription
    A CertificateDescription describes an X.509 certificate or CSR that has been issued, as an alternative to using ASN.1 / X.509.
    """
    
    aia_issuing_certificate_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aiaIssuingCertificateUrls') }})
    authority_key_id: Optional[KeyID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorityKeyId') }})
    cert_fingerprint: Optional[CertificateFingerprint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certFingerprint') }})
    config_values: Optional[ReusableConfigValues] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configValues') }})
    crl_distribution_points: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crlDistributionPoints') }})
    public_key: Optional[PublicKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKey') }})
    subject_description: Optional[SubjectDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectDescription') }})
    subject_key_id: Optional[KeyID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectKeyId') }})
    

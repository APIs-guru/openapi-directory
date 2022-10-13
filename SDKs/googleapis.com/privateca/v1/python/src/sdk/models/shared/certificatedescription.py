from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keyid
from . import certificatefingerprint
from . import publickey
from . import subjectdescription
from . import keyid
from . import x509parameters


@dataclass_json
@dataclass
class CertificateDescription:
    aia_issuing_certificate_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aiaIssuingCertificateUrls' }})
    authority_key_id: Optional[keyid.KeyID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorityKeyId' }})
    cert_fingerprint: Optional[certificatefingerprint.CertificateFingerprint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certFingerprint' }})
    crl_distribution_points: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crlDistributionPoints' }})
    public_key: Optional[publickey.PublicKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKey' }})
    subject_description: Optional[subjectdescription.SubjectDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjectDescription' }})
    subject_key_id: Optional[keyid.KeyID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjectKeyId' }})
    x509_description: Optional[x509parameters.X509Parameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'x509Description' }})
    

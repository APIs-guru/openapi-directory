from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CertificateChains:
    r"""CertificateChains
    Certificate chains needed to verify the attestation. Certificates in chains are PEM-encoded and are ordered based on https://tools.ietf.org/html/rfc5246#section-7.4.2.
    """
    
    cavium_certs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caviumCerts') }})
    google_card_certs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleCardCerts') }})
    google_partition_certs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googlePartitionCerts') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PublishingOptions:
    r"""PublishingOptions
    Options relating to the publication of each CertificateAuthority's CA certificate and CRLs and their inclusion as extensions in issued Certificates. The options set here apply to certificates issued by any CertificateAuthority in the CaPool.
    """
    
    publish_ca_cert: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishCaCert') }})
    publish_crl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishCrl') }})
    

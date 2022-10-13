from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccessUrls:
    ca_certificate_access_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caCertificateAccessUrl' }})
    crl_access_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crlAccessUrls' }})
    

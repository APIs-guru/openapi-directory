from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IssuingOptions:
    include_ca_cert_url: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeCaCertUrl' }})
    include_crl_access_url: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeCrlAccessUrl' }})
    

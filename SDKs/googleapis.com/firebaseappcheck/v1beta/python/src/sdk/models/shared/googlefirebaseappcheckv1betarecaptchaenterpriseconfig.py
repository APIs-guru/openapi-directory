from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    site_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteKey' }})
    token_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenTtl' }})
    

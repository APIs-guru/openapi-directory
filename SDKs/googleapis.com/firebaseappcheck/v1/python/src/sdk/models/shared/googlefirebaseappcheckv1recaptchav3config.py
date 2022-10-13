from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1RecaptchaV3Config:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    site_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteSecret' }})
    site_secret_set: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteSecretSet' }})
    token_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenTtl' }})
    

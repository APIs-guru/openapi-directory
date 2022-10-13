from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MailerSettings:
    api_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKey' }})
    api_key_private: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKeyPrivate' }})
    api_key_public: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKeyPublic' }})
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    eu: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eu' }})
    header: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

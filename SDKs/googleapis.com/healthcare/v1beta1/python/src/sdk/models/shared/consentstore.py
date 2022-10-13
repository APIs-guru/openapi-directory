from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConsentStore:
    default_consent_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultConsentTtl' }})
    enable_consent_create_on_update: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableConsentCreateOnUpdate' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

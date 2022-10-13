from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIKeyOut:
    admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admin' }})
    anonymized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anonymized' }})
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKey' }})
    corporate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'corporate' }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    learnable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'learnable' }})
    partner: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partner' }})
    striped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'striped' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    vetted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vetted' }})
    

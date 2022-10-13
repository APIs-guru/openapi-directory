from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WebAppConfig:
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKey' }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    auth_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authDomain' }})
    database_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseURL' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    measurement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measurementId' }})
    messaging_sender_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messagingSenderId' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    storage_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageBucket' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefirebaseappcheckv1playintegrityconfig


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse:
    configs: Optional[List[googlefirebaseappcheckv1playintegrityconfig.GoogleFirebaseAppcheckV1PlayIntegrityConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    

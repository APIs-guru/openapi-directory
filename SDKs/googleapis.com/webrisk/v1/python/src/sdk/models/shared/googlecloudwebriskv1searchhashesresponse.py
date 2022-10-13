from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudwebriskv1searchhashesresponsethreathash


@dataclass_json
@dataclass
class GoogleCloudWebriskV1SearchHashesResponse:
    negative_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'negativeExpireTime' }})
    threats: Optional[List[googlecloudwebriskv1searchhashesresponsethreathash.GoogleCloudWebriskV1SearchHashesResponseThreatHash]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threats' }})
    

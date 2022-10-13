from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudwebriskv1searchurisresponsethreaturi


@dataclass_json
@dataclass
class GoogleCloudWebriskV1SearchUrisResponse:
    threat: Optional[googlecloudwebriskv1searchurisresponsethreaturi.GoogleCloudWebriskV1SearchUrisResponseThreatURI] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threat' }})
    

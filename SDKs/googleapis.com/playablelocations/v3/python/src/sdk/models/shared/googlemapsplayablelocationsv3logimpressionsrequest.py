from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlemapsunityclientinfo
from . import googlemapsplayablelocationsv3impression


@dataclass_json
@dataclass
class GoogleMapsPlayablelocationsV3LogImpressionsRequest:
    client_info: Optional[googlemapsunityclientinfo.GoogleMapsUnityClientInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientInfo' }})
    impressions: Optional[List[googlemapsplayablelocationsv3impression.GoogleMapsPlayablelocationsV3Impression]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impressions' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    

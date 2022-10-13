from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlemapsunityclientinfo
from . import googlemapsplayablelocationsv3playerreport


@dataclass_json
@dataclass
class GoogleMapsPlayablelocationsV3LogPlayerReportsRequest:
    client_info: Optional[googlemapsunityclientinfo.GoogleMapsUnityClientInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientInfo' }})
    player_reports: Optional[List[googlemapsplayablelocationsv3playerreport.GoogleMapsPlayablelocationsV3PlayerReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playerReports' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    

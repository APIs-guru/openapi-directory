from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum(str, Enum):
    BAD_LOCATION_REASON_UNSPECIFIED = "BAD_LOCATION_REASON_UNSPECIFIED"
    OTHER = "OTHER"
    NOT_PEDESTRIAN_ACCESSIBLE = "NOT_PEDESTRIAN_ACCESSIBLE"
    NOT_OPEN_TO_PUBLIC = "NOT_OPEN_TO_PUBLIC"
    PERMANENTLY_CLOSED = "PERMANENTLY_CLOSED"
    TEMPORARILY_INACCESSIBLE = "TEMPORARILY_INACCESSIBLE"


@dataclass_json
@dataclass
class GoogleMapsPlayablelocationsV3PlayerReport:
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    location_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationName' }})
    reason_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasonDetails' }})
    reasons: Optional[List[GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasons' }})
    

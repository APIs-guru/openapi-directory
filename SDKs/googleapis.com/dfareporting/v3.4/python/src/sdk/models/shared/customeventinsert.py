from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import campaignmanagerids
from . import dv3ids

class CustomEventInsertInsertEventTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    IMPRESSION = "IMPRESSION"
    CLICK = "CLICK"


@dataclass_json
@dataclass
class CustomEventInsert:
    cm_dimensions: Optional[campaignmanagerids.CampaignManagerIds] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cmDimensions' }})
    dv3_dimensions: Optional[dv3ids.Dv3Ids] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dv3Dimensions' }})
    insert_event_type: Optional[CustomEventInsertInsertEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertEventType' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    match_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchId' }})
    mobile_device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileDeviceId' }})
    

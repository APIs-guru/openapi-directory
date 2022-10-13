from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import advertisedid
from . import attachmentinfo


@dataclass_json
@dataclass
class BeaconInfo:
    advertised_id: Optional[advertisedid.AdvertisedID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertisedId' }})
    attachments: Optional[List[attachmentinfo.AttachmentInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachments' }})
    beacon_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beaconName' }})
    

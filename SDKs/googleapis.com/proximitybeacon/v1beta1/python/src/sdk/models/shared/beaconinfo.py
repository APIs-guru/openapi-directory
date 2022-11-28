from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BeaconInfo:
    r"""BeaconInfo
    A subset of beacon information served via the `beaconinfo.getforobserved` method, which you call when users of your app encounter your beacons.
    """
    
    advertised_id: Optional[AdvertisedID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertisedId') }})
    attachments: Optional[List[AttachmentInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachments') }})
    beacon_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beaconName') }})
    

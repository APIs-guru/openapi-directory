from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AttachmentInfo:
    r"""AttachmentInfo
    A subset of attachment information served via the `beaconinfo.getforobserved` method, used when your users encounter your beacons.
    """
    
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    max_distance_meters: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDistanceMeters') }})
    namespaced_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespacedType') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import subnetwork


@dataclass_json
@dataclass
class RangeReservation:
    ip_prefix_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipPrefixLength' }})
    requested_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedRanges' }})
    secondary_range_ip_prefix_lengths: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryRangeIpPrefixLengths' }})
    subnetwork_candidates: Optional[List[subnetwork.Subnetwork]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetworkCandidates' }})
    

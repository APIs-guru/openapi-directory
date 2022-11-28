from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RangeReservation:
    r"""RangeReservation
    Represents a range reservation.
    """
    
    ip_prefix_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipPrefixLength') }})
    requested_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedRanges') }})
    secondary_range_ip_prefix_lengths: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryRangeIpPrefixLengths') }})
    subnetwork_candidates: Optional[List[Subnetwork]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetworkCandidates') }})
    

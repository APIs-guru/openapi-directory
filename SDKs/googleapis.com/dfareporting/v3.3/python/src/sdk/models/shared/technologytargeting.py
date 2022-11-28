from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TechnologyTargeting:
    r"""TechnologyTargeting
    Technology Targeting.
    """
    
    browsers: Optional[List[Browser]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('browsers') }})
    connection_types: Optional[List[ConnectionType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionTypes') }})
    mobile_carriers: Optional[List[MobileCarrier]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileCarriers') }})
    operating_system_versions: Optional[List[OperatingSystemVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystemVersions') }})
    operating_systems: Optional[List[OperatingSystem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystems') }})
    platform_types: Optional[List[PlatformType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformTypes') }})
    

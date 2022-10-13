from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import browser
from . import connectiontype
from . import mobilecarrier
from . import operatingsystemversion
from . import operatingsystem
from . import platformtype


@dataclass_json
@dataclass
class TechnologyTargeting:
    browsers: Optional[List[browser.Browser]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'browsers' }})
    connection_types: Optional[List[connectiontype.ConnectionType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionTypes' }})
    mobile_carriers: Optional[List[mobilecarrier.MobileCarrier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileCarriers' }})
    operating_system_versions: Optional[List[operatingsystemversion.OperatingSystemVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatingSystemVersions' }})
    operating_systems: Optional[List[operatingsystem.OperatingSystem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatingSystems' }})
    platform_types: Optional[List[platformtype.PlatformType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformTypes' }})
    

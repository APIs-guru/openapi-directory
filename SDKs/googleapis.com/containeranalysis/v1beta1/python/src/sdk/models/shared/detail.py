from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Detail:
    r"""Detail
    Identifies all appearances of this vulnerability in the package for a specific distro/location. For example: glibc in cpe:/o:debian:debian_linux:8 for versions 2.1 - 2.2
    """
    
    cpe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpeUri') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    fixed_location: Optional[VulnerabilityLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedLocation') }})
    is_obsolete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isObsolete') }})
    max_affected_version: Optional[Version] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxAffectedVersion') }})
    min_affected_version: Optional[Version] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minAffectedVersion') }})
    package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package') }})
    package_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageType') }})
    severity_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severityName') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    source_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceUpdateTime') }})
    vendor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendor') }})
    

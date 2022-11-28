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
    A detail for a distro and package affected by this vulnerability and its associated fix (if one is available).
    """
    
    affected_cpe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affectedCpeUri') }})
    affected_package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affectedPackage') }})
    affected_version_end: Optional[Version] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affectedVersionEnd') }})
    affected_version_start: Optional[Version] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affectedVersionStart') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    fixed_cpe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedCpeUri') }})
    fixed_package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedPackage') }})
    fixed_version: Optional[Version] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedVersion') }})
    is_obsolete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isObsolete') }})
    package_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageType') }})
    severity_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severityName') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    source_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceUpdateTime') }})
    vendor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendor') }})
    

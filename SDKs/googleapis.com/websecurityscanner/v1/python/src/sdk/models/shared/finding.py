from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FindingSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    CRITICAL = "CRITICAL"
    HIGH = "HIGH"
    MEDIUM = "MEDIUM"
    LOW = "LOW"


@dataclass_json
@dataclass
class Finding:
    r"""Finding
    A Finding resource represents a vulnerability instance identified during a ScanRun.
    """
    
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    final_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalUrl') }})
    finding_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingType') }})
    form: Optional[Form] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form') }})
    frame_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameUrl') }})
    fuzzed_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fuzzedUrl') }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpMethod') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    outdated_library: Optional[OutdatedLibrary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outdatedLibrary') }})
    reproduction_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reproductionUrl') }})
    severity: Optional[FindingSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    tracking_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    violating_resource: Optional[ViolatingResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violatingResource') }})
    vulnerable_headers: Optional[VulnerableHeaders] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerableHeaders') }})
    vulnerable_parameters: Optional[VulnerableParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerableParameters') }})
    xss: Optional[XSS] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xss') }})
    xxe: Optional[Xxe] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xxe') }})
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import form
from . import outdatedlibrary
from . import violatingresource
from . import vulnerableheaders
from . import vulnerableparameters
from . import xss
from . import xxe

class FindingSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    CRITICAL = "CRITICAL"
    HIGH = "HIGH"
    MEDIUM = "MEDIUM"
    LOW = "LOW"


@dataclass_json
@dataclass
class Finding:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    final_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finalUrl' }})
    finding_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingType' }})
    form: Optional[form.Form] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form' }})
    frame_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frameUrl' }})
    fuzzed_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fuzzedUrl' }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpMethod' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    outdated_library: Optional[outdatedlibrary.OutdatedLibrary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outdatedLibrary' }})
    reproduction_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reproductionUrl' }})
    severity: Optional[FindingSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    tracking_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingId' }})
    violating_resource: Optional[violatingresource.ViolatingResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violatingResource' }})
    vulnerable_headers: Optional[vulnerableheaders.VulnerableHeaders] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vulnerableHeaders' }})
    vulnerable_parameters: Optional[vulnerableparameters.VulnerableParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vulnerableParameters' }})
    xss: Optional[xss.XSS] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xss' }})
    xxe: Optional[xxe.Xxe] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xxe' }})
    

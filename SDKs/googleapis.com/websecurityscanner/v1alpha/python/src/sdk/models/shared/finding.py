from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import outdatedlibrary
from . import violatingresource
from . import vulnerableheaders
from . import vulnerableparameters
from . import xss

class FindingFindingTypeEnum(str, Enum):
    FINDING_TYPE_UNSPECIFIED = "FINDING_TYPE_UNSPECIFIED"
    MIXED_CONTENT = "MIXED_CONTENT"
    OUTDATED_LIBRARY = "OUTDATED_LIBRARY"
    ROSETTA_FLASH = "ROSETTA_FLASH"
    XSS_CALLBACK = "XSS_CALLBACK"
    XSS_ERROR = "XSS_ERROR"
    CLEAR_TEXT_PASSWORD = "CLEAR_TEXT_PASSWORD"
    INVALID_CONTENT_TYPE = "INVALID_CONTENT_TYPE"
    XSS_ANGULAR_CALLBACK = "XSS_ANGULAR_CALLBACK"
    INVALID_HEADER = "INVALID_HEADER"
    MISSPELLED_SECURITY_HEADER_NAME = "MISSPELLED_SECURITY_HEADER_NAME"
    MISMATCHING_SECURITY_HEADER_VALUES = "MISMATCHING_SECURITY_HEADER_VALUES"


@dataclass_json
@dataclass
class Finding:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    final_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finalUrl' }})
    finding_type: Optional[FindingFindingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingType' }})
    frame_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frameUrl' }})
    fuzzed_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fuzzedUrl' }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpMethod' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    outdated_library: Optional[outdatedlibrary.OutdatedLibrary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outdatedLibrary' }})
    reproduction_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reproductionUrl' }})
    tracking_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingId' }})
    violating_resource: Optional[violatingresource.ViolatingResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violatingResource' }})
    vulnerable_headers: Optional[vulnerableheaders.VulnerableHeaders] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vulnerableHeaders' }})
    vulnerable_parameters: Optional[vulnerableparameters.VulnerableParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vulnerableParameters' }})
    xss: Optional[xss.XSS] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xss' }})
    

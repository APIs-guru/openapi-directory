from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ZoneDiscoverySpec:
    r"""GoogleCloudDataplexV1ZoneDiscoverySpec
    Settings to manage the metadata discovery and publishing in a zone.
    """
    
    csv_options: Optional[GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('csvOptions') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    exclude_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludePatterns') }})
    include_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includePatterns') }})
    json_options: Optional[GoogleCloudDataplexV1ZoneDiscoverySpecJSONOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonOptions') }})
    schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    

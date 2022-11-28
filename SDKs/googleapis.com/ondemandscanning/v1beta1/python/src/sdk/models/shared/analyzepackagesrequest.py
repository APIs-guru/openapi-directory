from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnalyzePackagesRequest:
    r"""AnalyzePackagesRequest
    AnalyzePackagesRequest is the request to analyze a list of packages and create Vulnerability Occurrences for it.
    """
    
    packages: Optional[List[PackageData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packages') }})
    resource_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceUri') }})
    

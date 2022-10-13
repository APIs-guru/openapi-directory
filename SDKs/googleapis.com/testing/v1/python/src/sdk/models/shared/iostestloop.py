from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filereference


@dataclass_json
@dataclass
class IosTestLoop:
    app_bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appBundleId' }})
    app_ipa: Optional[filereference.FileReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appIpa' }})
    scenarios: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scenarios' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import ospolicyresourcefile


@dataclass_json
@dataclass
class OsPolicyResourcePackageResourceDeb:
    pull_deps: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullDeps' }})
    source: Optional[ospolicyresourcefile.OsPolicyResourceFile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accessselector
from . import identityselector
from . import resourceselector


@dataclass_json
@dataclass
class IamPolicyAnalysisQuery:
    access_selector: Optional[accessselector.AccessSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessSelector' }})
    identity_selector: Optional[identityselector.IdentitySelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identitySelector' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    resource_selector: Optional[resourceselector.ResourceSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceSelector' }})
    

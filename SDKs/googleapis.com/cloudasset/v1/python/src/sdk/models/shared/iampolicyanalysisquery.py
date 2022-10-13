from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accessselector
from . import conditioncontext
from . import identityselector
from . import options
from . import resourceselector


@dataclass_json
@dataclass
class IamPolicyAnalysisQuery:
    access_selector: Optional[accessselector.AccessSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessSelector' }})
    condition_context: Optional[conditioncontext.ConditionContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditionContext' }})
    identity_selector: Optional[identityselector.IdentitySelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identitySelector' }})
    options: Optional[options.Options] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    resource_selector: Optional[resourceselector.ResourceSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceSelector' }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    

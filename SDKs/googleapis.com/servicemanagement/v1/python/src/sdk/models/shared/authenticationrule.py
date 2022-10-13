from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import oauthrequirements
from . import authrequirement


@dataclass_json
@dataclass
class AuthenticationRule:
    allow_without_credential: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowWithoutCredential' }})
    oauth: Optional[oauthrequirements.OAuthRequirements] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth' }})
    requirements: Optional[List[authrequirement.AuthRequirement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requirements' }})
    selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    

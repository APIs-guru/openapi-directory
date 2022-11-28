from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObPartyRelationships1Account:
    r"""ObPartyRelationships1Account
    Relationship to the Account resource.
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    related: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Related') }})
    

@dataclass_json
@dataclass
class ObPartyRelationships1:
    r"""ObPartyRelationships1
    The Party's relationships with other resources.
    """
    
    account: Optional[ObPartyRelationships1Account] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Account') }})
    

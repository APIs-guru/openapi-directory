from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnableMigrationRequest:
    r"""EnableMigrationRequest
    EnableMigrationRequest is the request message for EnableMigration method.
    """
    
    migrating_domains: Optional[List[OnPremDomainDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('migratingDomains') }})
    

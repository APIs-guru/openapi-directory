from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OsPolicyResourceRepositoryResourceGooRepository:
    r"""OsPolicyResourceRepositoryResourceGooRepository
    Represents a Goo package repository. These are added to a repo file that is managed at `C:/ProgramData/GooGet/repos/google_osconfig.repo`.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

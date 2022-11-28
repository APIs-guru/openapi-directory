from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LandlordCrmEntry:
    r"""LandlordCrmEntry
    Class for Landlord CRM Entries
    """
    
    branch_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchID') }})
    global_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalReference') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    oid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OID') }})
    

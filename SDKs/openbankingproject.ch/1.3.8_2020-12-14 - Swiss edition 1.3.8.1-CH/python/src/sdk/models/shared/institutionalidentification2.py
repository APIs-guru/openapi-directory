from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InstitutionalIdentification2:
    r"""InstitutionalIdentification2
    Institiutional identification of a bank (Clearing System Member ID)
    adapted from ISO pain.001.001.03.ch.02 ClearingSystemMemberIdentification2
    
    """
    
    clearing_system_id_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clearingSystemIdCode') }})
    clearing_system_member_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clearingSystemMemberId') }})
    

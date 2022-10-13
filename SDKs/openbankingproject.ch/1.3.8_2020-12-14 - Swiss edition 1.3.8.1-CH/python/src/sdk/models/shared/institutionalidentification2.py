from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InstitutionalIdentification2:
    clearing_system_id_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clearingSystemIdCode' }})
    clearing_system_member_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clearingSystemMemberId' }})
    

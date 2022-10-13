from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ObBankTransactionCodeStructure1:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    sub_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubCode' }})
    

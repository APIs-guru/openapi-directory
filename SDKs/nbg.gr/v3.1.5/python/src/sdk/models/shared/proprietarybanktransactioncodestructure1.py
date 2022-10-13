from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProprietaryBankTransactionCodeStructure1:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Issuer' }})
    

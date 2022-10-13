from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ObFundsConfirmation1DataInstructedAmount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    

@dataclass_json
@dataclass
class ObFundsConfirmation1Data:
    consent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsentId' }})
    instructed_amount: ObFundsConfirmation1DataInstructedAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstructedAmount' }})
    reference: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reference' }})
    

@dataclass_json
@dataclass
class ObFundsConfirmation1:
    data: ObFundsConfirmation1Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    

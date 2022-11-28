from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObFundsConfirmation1DataInstructedAmount:
    r"""ObFundsConfirmation1DataInstructedAmount
    Amount of money to be confirmed as available funds in the debtor account. Contains an Amount and a Currency.
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass_json
@dataclass
class ObFundsConfirmation1Data:
    consent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsentId') }})
    instructed_amount: ObFundsConfirmation1DataInstructedAmount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstructedAmount') }})
    reference: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    

@dataclass_json
@dataclass
class ObFundsConfirmation1:
    data: ObFundsConfirmation1Data = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    

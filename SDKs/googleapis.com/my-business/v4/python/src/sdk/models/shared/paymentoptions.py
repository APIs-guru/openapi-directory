from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PaymentOptionsCashExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PaymentOptionsChequeExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PaymentOptionsCreditCardExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PaymentOptionsDebitCardExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PaymentOptionsMobileNfcExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class PaymentOptions:
    r"""PaymentOptions
    Forms of payment accepted at the property.
    """
    
    cash: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cash') }})
    cash_exception: Optional[PaymentOptionsCashExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cashException') }})
    cheque: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cheque') }})
    cheque_exception: Optional[PaymentOptionsChequeExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chequeException') }})
    credit_card: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditCard') }})
    credit_card_exception: Optional[PaymentOptionsCreditCardExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditCardException') }})
    debit_card: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debitCard') }})
    debit_card_exception: Optional[PaymentOptionsDebitCardExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debitCardException') }})
    mobile_nfc: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileNfc') }})
    mobile_nfc_exception: Optional[PaymentOptionsMobileNfcExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileNfcException') }})
    

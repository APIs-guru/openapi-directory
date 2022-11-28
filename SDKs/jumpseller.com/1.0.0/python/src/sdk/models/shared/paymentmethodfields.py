from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PaymentMethodFieldsTypeEnum(str, Enum):
    MANUAL = "manual"
    PAYPAL = "paypal"
    PAGSEGURO = "pagseguro"
    MONEYBOOKERS = "moneybookers"
    WEBPAY_CL = "webpay_cl"
    EASYPAY = "easypay"
    EASYPAYCC = "easypaycc"
    EASYPAYBOLETO = "easypayboleto"
    IDEAL_BASIC = "ideal_basic"
    HIPAY = "hipay"
    KHIPU = "khipu"
    MERCADO_PAGO = "mercado_pago"
    IFTHENPAY = "ifthenpay"
    EUPAGO = "eupago"
    STRIPE = "stripe"
    PAYU = "payu"
    SERVIPAG = "servipag"


@dataclass_json
@dataclass
class PaymentMethodFields:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[PaymentMethodFieldsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ObscaSupportData1AppliedAuthenticationApproachEnum(str, Enum):
    CA = "CA"
    SCA = "SCA"

class ObscaSupportData1RequestedScaExemptionTypeEnum(str, Enum):
    BILL_PAYMENT = "BillPayment"
    CONTACTLESS_TRAVEL = "ContactlessTravel"
    ECOMMERCE_GOODS = "EcommerceGoods"
    ECOMMERCE_SERVICES = "EcommerceServices"
    KIOSK = "Kiosk"
    PARKING = "Parking"
    PARTY_TO_PARTY = "PartyToParty"


@dataclass_json
@dataclass
class ObscaSupportData1:
    r"""ObscaSupportData1
    Supporting Data provided by TPP, when requesting SCA Exemption.
    """
    
    applied_authentication_approach: Optional[ObscaSupportData1AppliedAuthenticationApproachEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppliedAuthenticationApproach') }})
    reference_payment_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferencePaymentOrderId') }})
    requested_sca_exemption_type: Optional[ObscaSupportData1RequestedScaExemptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestedSCAExemptionType') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PaymentServiceProviderLinkInfo:
    r"""PaymentServiceProviderLinkInfo
    Additional information required for PAYMENT_SERVICE_PROVIDER link type.
    """
    
    external_account_business_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalAccountBusinessCountry') }})
    external_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalAccountId') }})
    

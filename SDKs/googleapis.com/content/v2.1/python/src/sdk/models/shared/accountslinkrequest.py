from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountsLinkRequest:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    e_commerce_platform_link_info: Optional[ECommercePlatformLinkInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eCommercePlatformLinkInfo') }})
    link_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkType') }})
    linked_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedAccountId') }})
    payment_service_provider_link_info: Optional[PaymentServiceProviderLinkInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentServiceProviderLinkInfo') }})
    services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    

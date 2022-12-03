from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class QuoteV1BindStatusEnum(str, Enum):
    READY = "ready"
    UNAVAILABLE = "unavailable"
    REQUESTED = "requested"

class QuoteV1StatusEnum(str, Enum):
    PENDING = "pending"
    REFERRAL = "referral"
    REFERRED = "referred"
    DECLINED = "declined"
    ACTIVE = "active"
    EXPIRED = "expired"
    UNRESPONSIVE = "unresponsive"


@dataclass_json
@dataclass
class QuoteV1:
    r"""QuoteV1
    A quote declares an institution's willingness to sell an insurance policy to a customer. Active quotes contain details about a policy the customer can purchase and related prices.
    
    Read more about [quotes](https://www.heraldapi.com/docs/quotes).
    """
    
    bind_status: QuoteV1BindStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bind_status') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    product_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_id') }})
    status: QuoteV1StatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    submission_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('submission_id') }})
    coverage_values: Optional[list[CoverageValueWriteV1]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverage_values') }})
    files: Optional[list[FileMiniV1]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    naic_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('naic_code') }})
    portal_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portal_link') }})
    prices: Optional[QuotePriceV1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    status_reasons: Optional[StatusReason] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_reasons') }})
    
